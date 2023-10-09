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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
const consts_1 = require("../consts");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getUsers() {
        return this.prismaService.user.findMany();
    }
    getUser(id) {
        return this.prismaService.user.findUnique({
            where: { id },
            select: consts_1.DATA_USER_SELECTION,
        });
    }
    getUserByEmail(email) {
        return this.prismaService.user.findUnique({
            where: { email },
            include: { password: true },
        });
    }
    async create(userData, password) {
        try {
            return await this.prismaService.user.create({
                data: {
                    ...userData,
                    password: {
                        create: {
                            hashedPassword: password,
                        },
                    },
                },
            });
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.BadRequestException('User already exists');
            throw error;
        }
    }
    async update(userId, password, userData) {
        try {
            return await this.prismaService.user.update({
                where: { id: userId },
                data: {
                    ...userData,
                    password: {
                        update: {
                            hashedPassword: password,
                        },
                    },
                },
            });
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.BadRequestException('User already exists');
            throw error;
        }
    }
    delete(id) {
        return this.prismaService.user.delete({
            where: { id },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map