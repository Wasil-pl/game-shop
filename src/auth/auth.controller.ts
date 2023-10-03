import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Response,
  Delete,
  Get,
} from '@nestjs/common';
import { RegisterDTO } from './dtos/Register.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth-guard';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  /* --------------------- REGISTER --------------------- */

  @Post('/register')
  public register(@Body() userData: RegisterDTO) {
    return this.authService.register(userData);
  }

  /* --------------------- LOGIN --------------------- */

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Response() res) {
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true });
    res.json(req.user.id);
  }

  /* --------------------- IS LOGGED --------------------- */

  @Get('/isLogged')
  async isLogged(@Request() req) {
    try {
      const tokenValue = req.cookies['auth'];
      const token = tokenValue?.access_token;

      if (!token) {
        return { isValid: false };
      }

      const decoded = this.jwtService.verify(token);
      if (decoded) {
        return { isValid: true, userId: decoded.sub };
      }
    } catch (error) {
      return { message: error.message };
    }
    return { isValid: false };
  }

  /* --------------------- LOGOUT --------------------- */

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  async logout(@Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
