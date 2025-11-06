import { Injectable } from '@nestjs/common';
import { LoginUser } from '../types';
import jwt from  'jsonwebtoken'
import bcrypt from 'bcrypt'
import pool from '../db/connection';
import dotenv from 'dotenv';
dotenv.config({ path: `./src/.env` });


@Injectable()
export class LoginService {
  async loginUser({email, password}: LoginUser, res: any) {
    try {
      const [total] = await pool.query(`SELECT count(email) as total FROM users where email = ?`, [email]);
      if (total[0]?.total) {
        const [userArr] = await pool.query(`SELECT id, name, email, password_hash, account_type FROM users where email = ?`, [email]);
        const user= userArr[0];
        const checkPass = await bcrypt.compare(password, user.password_hash);
        if (checkPass){
          const token = await jwt.sign(user, process.env.SECRET);
          res.cookie('authToken', token, {httpOnly: true, expires: new Date(Date.now() + 9999999)})
          return {status: `200` , msg: "success"};
        }
      }
      return  {status: '200', msg: `wrong credentials`};
    }catch (error) {
      console.log(error);
      return  {status: '200', msg: `wrong credentials`};
    }
  }
}
