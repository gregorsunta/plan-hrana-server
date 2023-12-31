import { DataSource } from 'typeorm';
import { Categories, Products, Prices } from './entity/index.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Products, Prices, Categories],
  extra: {
    ssl: process.env.DB_SSL,
  },
});
