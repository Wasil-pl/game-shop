import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  /* --------------------- GET USER --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  public getUsers() {
    return this.userService.getUsers();
  }

  /* --------------------- GET USER BY ID --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  public getUser(@Param('id', new ParseUUIDPipe()) id: User['id']) {
    const user = this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  /* --------------------- DELETE USER --------------------- */

  @Delete('/:id')
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  public async deleteUser(@Param('id', new ParseUUIDPipe()) id: User['id']) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await this.userService.delete(id);
    return { message: `User ${user.email} deleted` };
  }
}