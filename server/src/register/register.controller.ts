import { Body, Controller, Post } from '@nestjs/common';
import {RegisterService} from './register';
import {type User} from '../types';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async register(@Body() user: User ) {
    await this.registerService.registerUser(user)
  }
}
