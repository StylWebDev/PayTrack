import {Injectable } from '@nestjs/common';
import { User } from '../types';
import pool from '../db/connection';
import bcrypt from 'bcrypt'

@Injectable()
export class RegisterService {

  async registerUser({name, email, password}: User ) {
    try {
      const [total] = await pool.query(`SELECT count(email) as total FROM users where email = ?`, [email]);
      if (total[0]?.total === 0) {
        const password_hash = await bcrypt.hash(password, 10);
        await pool.query(`INSERT INTO users (name, email, password_hash, account_type) VALUES (?, ?, ?, ?)` ,[name, email, password_hash, 'user']);
        return {status: `200` , msg: "success"};
      }
      else {
        return  {status: '200', msg: `User Exists!`};
      }
    }catch (err) {
      return  {status: '200', msg: err?.sqlMessage};
    }
  }
}
