import { Controller, Get, Req, Res } from '@nestjs/common';
import {type LoginResponse } from '../types';

interface AuthRequest extends  Request{
  user: LoginResponse
}

@Controller()
export class AuthController {

  @Get('auth')
  getAuth(@Req() req: AuthRequest , @Res() res: Response) {
    const user = req.user;
    if (user) {
      return user;
    }
  }
}
