export declare const acceptedFileTypes: string[];
export declare const CORS_OPTIONS: {
    origin: string[];
    credentials: boolean;
};
export declare const DATA_USER_SELECTION: {
    id: boolean;
    email: boolean;
    firstName: boolean;
    password: boolean;
    role: boolean;
    createdAt: boolean;
    updatedAt: boolean;
    orders: {
        select: {
            id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            userId: boolean;
            totalQuantity: boolean;
            totalPrice: boolean;
            status: boolean;
            address: boolean;
            city: boolean;
            street: boolean;
            postalCode: boolean;
            items: {
                select: {
                    id: boolean;
                    quantity: boolean;
                    productId: boolean;
                    orderId: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    product: {
                        select: {
                            id: boolean;
                            name: boolean;
                            description: boolean;
                            price: boolean;
                            pegi: boolean;
                            language: boolean;
                            mainPicture: boolean;
                            createdAt: boolean;
                            updatedAt: boolean;
                            platform: boolean;
                            pictureOne: boolean;
                            pictureTwo: boolean;
                            pictureThree: boolean;
                            pictureFour: boolean;
                            pictureFive: boolean;
                            isActive: boolean;
                        };
                    };
                };
            };
        };
    };
};
export declare const DATA_ORDER_SELECTION: {
    id: boolean;
    createdAt: boolean;
    updatedAt: boolean;
    userId: boolean;
    totalQuantity: boolean;
    totalPrice: boolean;
    status: boolean;
    address: boolean;
    city: boolean;
    street: boolean;
    postalCode: boolean;
    message: boolean;
    user: {
        select: {
            id: boolean;
            email: boolean;
            firstName: boolean;
        };
    };
    items: {
        include: {
            product: {
                select: {
                    id: boolean;
                    name: boolean;
                    platform: boolean;
                    price: boolean;
                    salePrice: boolean;
                    inStock: boolean;
                    pictureOne: boolean;
                    pictureTwo: boolean;
                    pictureThree: boolean;
                    pictureFour: boolean;
                    pictureFive: boolean;
                };
            };
        };
    };
};
