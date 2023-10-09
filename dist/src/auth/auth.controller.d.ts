import { RegisterDTO } from './dtos/Register.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    register(userData: RegisterDTO): Promise<{
        id: string;
        email: string;
        firstName: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(req: any, res: any): Promise<void>;
    isLogged(req: any): Promise<{
        isValid: boolean;
        userId?: undefined;
        message?: undefined;
    } | {
        isValid: boolean;
        userId: any;
        message?: undefined;
    } | {
        message: any;
        isValid?: undefined;
        userId?: undefined;
    }>;
    logout(res: any): Promise<void>;
}
