import { DataSource } from 'typeorm';
import { Product } from './entity/Product.entity';
import { Price } from './entity/Price.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME_1,
  password: process.env.PASSWORD,
  database: process.env.NAME,
  synchronize: true,
  logging: false,
  entities: [Product, Price],
});
