import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<User[]>;
    getUser(id: User['id']): Promise<User | null>;
    getUserByEmail(email: User['email']): Promise<(User & {
        password: Password;
    }) | null>;
    create(userData: Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'>, password: string): Promise<User>;
    update(userId: User['id'], password: string | undefined, userData: Omit<User, 'id' | 'role'>): Promise<User>;
    delete(id: User['id']): Promise<User>;
}
