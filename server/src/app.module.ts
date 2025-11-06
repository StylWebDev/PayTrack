import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { AuthController } from './auth/auth.controller';
import { RegisterController } from './register/register.controller';
import { Auth } from './auth/auth';
import { LoginService } from './login/login';
import { RegisterService } from './register/register';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RegisterModule, LoginModule, AuthModule],
  controllers: [
    AppController,
    LoginController,
    AuthController,
    RegisterController,
  ],
  providers: [AppService, Auth, LoginService, RegisterService],
})
export class AppModule {}
