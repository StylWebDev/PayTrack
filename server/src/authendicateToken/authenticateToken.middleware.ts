import { Injectable, NestMiddleware } from '@nestjs/common';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config({path: './src/.env'})

@Injectable()
export class AuthenticateTokenMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authToken = req.cookies['authToken'];
    if (!authToken) return {status: 200, message: 'You are not authenticated' };
    else {
      jwt.verify(authToken, process.env,
        (err, user) => {
        if (err) {
          return {status: 200, message: 'Authentication Failed' };
        }
        else {
          req.user = user
          next()
        }
      })
    }
  }
}
