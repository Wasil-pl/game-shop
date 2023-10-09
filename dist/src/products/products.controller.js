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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const upload_files_1 = require("../utils/upload.files");
const create_product_dto_1 = require("./dtos/create-product.dto");
const platform_express_1 = require("@nestjs/platform-express");
const consts_1 = require("../consts");
const deleteFile_1 = require("../utils/deleteFile");
const update_product_dto_1 = require("./dtos/update-product.dto");
const admin_auth_guard_1 = require("../auth/admin-auth.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth-guard");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        return this.productService.getProducts();
    }
    getProductsIsActive() {
        return this.productService.getProductsIsActive();
    }
    async getProductById(id) {
        const product = await this.productService.getProductById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async getProductByPlatform(platform) {
        return this.productService.getProductByPlatform(platform);
    }
    async getProductsBySearchPhrase(searchPhrase) {
        return this.productService.getProductsBySearchPhrase(searchPhrase);
    }
    createProduct(product) {
        return this.productService.create(product);
    }
    async addFiles(files, id) {
        try {
            const mainPicture = files.mainPicture?.[0];
            const pictureOne = files.pictureOne?.[0];
            const pictureTwo = files.pictureTwo?.[0];
            const pictureThree = files.pictureThree?.[0];
            const pictureFour = files.pictureFour?.[0];
            const pictureFive = files.pictureFive?.[0];
            if (mainPicture && !consts_1.acceptedFileTypes.includes(mainPicture.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureOne && !consts_1.acceptedFileTypes.includes(pictureOne.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureTwo && !consts_1.acceptedFileTypes.includes(pictureTwo.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureThree && !consts_1.acceptedFileTypes.includes(pictureThree.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureFour && !consts_1.acceptedFileTypes.includes(pictureFour.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureFive && !consts_1.acceptedFileTypes.includes(pictureFive.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            return this.productService.addFiles(id, mainPicture, pictureOne, pictureTwo, pictureThree, pictureFour, pictureFive);
        }
        catch (error) {
            for (const key in files) {
                if (files[key]) {
                    (0, deleteFile_1.deleteFile)(files[key][0].filename);
                }
            }
            throw error;
        }
    }
    async addIsActive(id, isActiveString) {
        const product = await this.productService.getProductById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        const isActive = isActiveString === 'true';
        return await this.productService.addIsActive(id, isActive);
    }
    async updateDataProduct(id, productData) {
        const product = await this.productService.getProductById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return await this.productService.updateDataProduct(id, productData);
    }
    async updateFiles(files, id) {
        const oldFiles = [];
        try {
            const mainPicture = files.mainPicture?.[0];
            const pictureOne = files.pictureOne?.[0];
            const pictureTwo = files.pictureTwo?.[0];
            const pictureThree = files.pictureThree?.[0];
            const pictureFour = files.pictureFour?.[0];
            const pictureFive = files.pictureFive?.[0];
            const product = await this.productService.getProductById(id);
            if (!product)
                throw new common_1.NotFoundException('Product not found');
            if (!mainPicture)
                throw new common_1.BadRequestException('Main picture required');
            if (mainPicture && !consts_1.acceptedFileTypes.includes(mainPicture.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureOne && !consts_1.acceptedFileTypes.includes(pictureOne.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureTwo && !consts_1.acceptedFileTypes.includes(pictureTwo.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureThree && !consts_1.acceptedFileTypes.includes(pictureThree.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureFour && !consts_1.acceptedFileTypes.includes(pictureFour.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            if (pictureFive && !consts_1.acceptedFileTypes.includes(pictureFive.mimetype))
                throw new common_1.BadRequestException('Invalid file type');
            const updateFiles = this.productService.updateFilesProduct(id, mainPicture, pictureOne, pictureTwo, pictureThree, pictureFour, pictureFive);
            if (product.mainPicture)
                oldFiles.push(product.mainPicture);
            if (product.pictureOne)
                oldFiles.push(product.pictureOne);
            if (product.pictureTwo)
                oldFiles.push(product.pictureTwo);
            if (product.pictureThree)
                oldFiles.push(product.pictureThree);
            if (product.pictureFour)
                oldFiles.push(product.pictureFour);
            if (product.pictureFive)
                oldFiles.push(product.pictureFive);
            for (const file of oldFiles) {
                (0, deleteFile_1.deleteFile)(file);
            }
            return updateFiles;
        }
        catch (error) {
            for (const key in files) {
                if (files[key]) {
                    (0, deleteFile_1.deleteFile)(files[key][0].filename);
                }
            }
            throw error;
        }
    }
    async updateIsActive(id, isActiveString) {
        const product = await this.productService.getProductById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        const isActive = isActiveString === 'true';
        return await this.productService.updateIsActive(id, isActive);
    }
    async deleteProduct(id) {
        const product = await this.productService.getProductById(id);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        const productToDelete = await this.productService.delete(id);
        const mainPicture = product.mainPicture;
        const pictureOne = product.pictureOne;
        const pictureTwo = product.pictureTwo;
        const pictureThree = product.pictureThree;
        const pictureFour = product.pictureFour;
        const pictureFive = product.pictureFive;
        if (mainPicture)
            (0, deleteFile_1.deleteFile)(mainPicture);
        if (pictureOne)
            (0, deleteFile_1.deleteFile)(pictureOne);
        if (pictureTwo)
            (0, deleteFile_1.deleteFile)(pictureTwo);
        if (pictureThree)
            (0, deleteFile_1.deleteFile)(pictureThree);
        if (pictureFour)
            (0, deleteFile_1.deleteFile)(pictureFour);
        if (pictureFive)
            (0, deleteFile_1.deleteFile)(pictureFive);
        return productToDelete;
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('/isActive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductsIsActive", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('/platform/:platform'),
    __param(0, (0, common_1.Param)('platform')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductByPlatform", null);
__decorate([
    (0, common_1.Get)('/search/:searchPhrase'),
    __param(0, (0, common_1.Param)('searchPhrase')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductsBySearchPhrase", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/add/files/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictureOne', maxCount: 1 },
        { name: 'pictureTwo', maxCount: 1 },
        { name: 'pictureThree', maxCount: 1 },
        { name: 'pictureFour', maxCount: 1 },
        { name: 'pictureFive', maxCount: 1 },
    ], upload_files_1.multerOptions)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addFiles", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/add/isActive/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addIsActive", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateDataProduct", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/update/files/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictureOne', maxCount: 1 },
        { name: 'pictureTwo', maxCount: 1 },
        { name: 'pictureThree', maxCount: 1 },
        { name: 'pictureFour', maxCount: 1 },
        { name: 'pictureFive', maxCount: 1 },
    ], upload_files_1.multerOptions)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateFiles", null);
__decorate([
    (0, common_1.Put)('/update/isActive/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateIsActive", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map