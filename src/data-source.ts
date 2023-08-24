import { DataSource } from 'typeorm';
import { Product } from './entity/Product.entity';
import { Price } from './entity/Price.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Gregor00',
  database: 'nacrt_hrana_test_db',
  synchronize: true,
  logging: false,
  entities: [Product, Price],
});
