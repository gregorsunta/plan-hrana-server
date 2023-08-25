import dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Price } from '../src/entity/Price.entity';
import { Product } from '../src/entity/Product.entity';
import { preprocessData } from './preprocessor/index';
import { uploadProducts } from './uploader/index';
// @ts-ignore
import productsData from '../data/products';
// import { AppDataSource } from '../src/data-source';

dotenv.config({ path: '../.env' });

console.log('Starting script');
console.log(process.env.HOST);
console.log(process.env.PASSWORD);
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME_1,
  password: process.env.PASSWORD,
  database: process.env.NAME,
  synchronize: true,
  logging: false,
  entities: [Price, Product],
});

const sync = async () => {
  console.log(process.env.HOST);
  console.log(process.env.PASSWORD);
  await AppDataSource.initialize()
    .then(() => console.info('AppDataSource initialized'))
    .catch((err) => {
      console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
      console.error(err);
    });
  console.log('Starting sync');
  const preprocessedProductsData = preprocessData(productsData);
  uploadProducts(AppDataSource, preprocessedProductsData);
};

sync();
