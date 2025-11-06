import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
