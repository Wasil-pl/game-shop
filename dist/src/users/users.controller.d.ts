import { UsersService } from './users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<{
        id: string;
        email: string;
        firstName: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserRole(req: any): Promise<{
        role: import(".prisma/client").$Enums.Role;
    }>;
    getUser(req: any): Promise<{
        id: string;
        email: string;
        firstName: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserByEmail(email: User['email']): Promise<{
        id: string;
        email: string;
        firstName: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } & {
        password: {
            id: string;
            hashedPassword: string;
            userId: string;
        };
    }>;
    deleteUser(id: User['id']): Promise<{
        message: string;
    }>;
}
