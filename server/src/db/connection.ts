import { createPool } from 'mysql2'
import dotenv from 'dotenv'
import {LoginService} from '../login/login';

dotenv.config({ path: '../.env' })

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB_NAME,
}).promise();

try {
    pool.getConnection()
     .then((res) => {
        console.log(`connected to db`);
      });
}catch (error) {
  console.error(error);
}

export default pool;

const loginService = new LoginService();
loginService.loginUser({email: "a@a.com", password: "12345678"}).then(
  () => {console.log('bern')}
);