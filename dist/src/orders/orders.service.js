"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const consts_1 = require("../consts");
const prisma_service_1 = require("../shared/services/prisma.service");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getOrders() {
        return this.prismaService.order.findMany({
            include: {
                user: {
                    select: {
                        id: false,
                        email: true,
                        firstName: true,
                    },
                },
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    getOrder(id) {
        return this.prismaService.order.findUnique({
            where: { id },
            select: consts_1.DATA_ORDER_SELECTION,
        });
    }
    async create(orderData, items, userId) {
        let calculatedTotalQuantity = 0;
        let calculatedTotalPrice = 0;
        const orderItemsData = [];
        for (const item of items) {
            const product = await this.prismaService.product.findUnique({
                where: { id: item.productId },
            });
            if (!product)
                throw new common_1.BadRequestException('Product not found');
            if (product.salePrice) {
                calculatedTotalPrice += Number(product.salePrice) * item.quantity;
            }
            else {
                calculatedTotalPrice += Number(product.price) * item.quantity;
            }
            if (product.inStock <= 0) {
                throw new common_1.BadRequestException(`Product ${product.name} is out of stock.`);
            }
            if (product.inStock < item.quantity) {
                throw new common_1.BadRequestException(`Not enough ${product.name} in stock. Only ${product.inStock} left.`);
            }
            calculatedTotalQuantity += item.quantity;
            orderItemsData.push({
                quantity: item.quantity,
                product: {
                    connect: {
                        id: item.productId,
                    },
                },
            });
        }
        await this.prismaService.product.updateMany({
            where: { id: { in: items.map((item) => item.productId) } },
            data: { inStock: { decrement: calculatedTotalQuantity } },
        });
        return await this.prismaService.order.create({
            data: {
                ...orderData,
                userId: userId,
                totalQuantity: calculatedTotalQuantity,
                totalPrice: calculatedTotalPrice,
                items: {
                    create: orderItemsData,
                },
            },
        });
    }
    async updateOrderStatus(id, status) {
        return await this.prismaService.order.update({
            where: { id },
            data: { status },
            select: consts_1.DATA_ORDER_SELECTION,
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map