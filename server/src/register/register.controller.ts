import { Body, Controller, Post } from '@nestjs/common';
import {RegisterService} from './register';
import {type User} from '../types';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() user: User ) {
    await this.registerService.registerUser(user)
  }
}
