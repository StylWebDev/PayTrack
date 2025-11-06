import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://localhost:5170',
    credentials: true,
  }))
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
