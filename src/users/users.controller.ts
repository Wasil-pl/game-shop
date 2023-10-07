import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  /* --------------------- GET USERS --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  public getUsers() {
    return this.userService.getUsers();
  }

  /* --------------------- GET USER ROLE --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/role')
  public async getUserRole(@Req() req: any) {
    const userId = req.user.id;
    const user = await this.userService.getUser(userId);
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return { role: user.role };
  }

  /* --------------------- GET USER BY ID --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  public getUser(@Req() req: any) {
    const userId = req.user.id;
    const user = this.userService.getUser(userId);
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return user;
  }

  /* --------------------- GET USER BY EMAIL --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/email/:email')
  public getUserByEmail(@Param('email') email: User['email']) {
    const user = this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  /* --------------------- DELETE USER --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  public async deleteUser(@Param('id', new ParseUUIDPipe()) id: User['id']) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await this.userService.delete(id);
    return { message: `User ${user.email} deleted` };
  }
}
