import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticateTokenMiddleware } from './authendicateToken/authenticateToken.middleware';

@Module({
  imports: [RegisterModule, LoginModule, AuthModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateTokenMiddleware).forRoutes({ path: 'auth', method: RequestMethod.GET });
  }
}
