"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_ORDER_SELECTION = exports.DATA_USER_SELECTION = exports.CORS_OPTIONS = exports.acceptedFileTypes = void 0;
exports.acceptedFileTypes = ['image/png', 'image/gif', 'image/jpeg'];
exports.CORS_OPTIONS = {
    origin: ['http://localhost:3000'],
    credentials: true,
};
exports.DATA_USER_SELECTION = {
    id: true,
    email: true,
    firstName: true,
    password: false,
    role: true,
    createdAt: true,
    updatedAt: true,
    orders: {
        select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            userId: false,
            totalQuantity: true,
            totalPrice: true,
            status: true,
            address: true,
            city: true,
            street: true,
            postalCode: true,
            items: {
                select: {
                    id: false,
                    quantity: true,
                    productId: false,
                    orderId: false,
                    createdAt: false,
                    updatedAt: false,
                    product: {
                        select: {
                            id: false,
                            name: true,
                            description: false,
                            price: false,
                            pegi: false,
                            language: false,
                            mainPicture: false,
                            createdAt: false,
                            updatedAt: false,
                            platform: true,
                            pictureOne: false,
                            pictureTwo: false,
                            pictureThree: false,
                            pictureFour: false,
                            pictureFive: false,
                            isActive: false,
                        },
                    },
                },
            },
        },
    },
};
exports.DATA_ORDER_SELECTION = {
    id: true,
    createdAt: true,
    updatedAt: true,
    userId: true,
    totalQuantity: true,
    totalPrice: true,
    status: true,
    address: true,
    city: true,
    street: true,
    postalCode: true,
    message: true,
    user: {
        select: {
            id: false,
            email: true,
            firstName: true,
        },
    },
    items: {
        include: {
            product: {
                select: {
                    id: false,
                    name: true,
                    platform: true,
                    price: false,
                    salePrice: false,
                    inStock: false,
                    pictureOne: false,
                    pictureTwo: false,
                    pictureThree: false,
                    pictureFour: false,
                    pictureFive: false,
                },
            },
        },
    },
};
//# sourceMappingURL=consts.js.map