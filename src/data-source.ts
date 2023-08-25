import { DataSource } from 'typeorm';
import { Product } from './entity/Product.entity';
import { Price } from './entity/Price.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Product, Price],
  extra: {
    ssl: true,
    rejectUnauthorized: false,
  },
});
