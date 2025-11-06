import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import {LoginService} from './login';
import { type LoginUser } from '../types';


@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async loginUser(@Body() credentials: LoginUser  ,@Res({passthrough: true}) res: Request ) {
    await this.loginService.loginUser(credentials ,res)
  }
}
