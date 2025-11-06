import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login';


@Module({
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
