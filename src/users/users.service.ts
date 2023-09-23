import { BadRequestException, Injectable } from '@nestjs/common';
import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  /* --------------------- GET USERS --------------------- */

  public getUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  /* --------------------- GET USER BY ID --------------------- */

  public getUser(id: User['id']): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  /* --------------------- GET USER BY EMAIL --------------------- */

  public getUserByEmail(
    email: User['email'],
  ): Promise<(User & { password: Password }) | null> {
    return this.prismaService.user.findUnique({
      where: { email },
      include: { password: true },
    });
  }

  /* --------------------- CREATE USER --------------------- */

  public async create(
    userData: Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'>,
    password: string,
  ): Promise<User> {
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
    } catch (error) {
      if (error.code === 'P2002')
        throw new BadRequestException('User already exists');
      throw error;
    }
  }

  /* --------------------- UPDATE USER --------------------- */

  public async update(
    userId: User['id'],
    password: string | undefined,
    userData: Omit<User, 'id' | 'role'>,
  ): Promise<User> {
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
    } catch (error) {
      if (error.code === 'P2002')
        throw new BadRequestException('User already exists');
      throw error;
    }
  }

  /* --------------------- DELETE USER --------------------- */

  public delete(id: User['id']): Promise<User> {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
