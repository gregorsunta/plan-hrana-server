import dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Price } from '../src/entity/Price.entity';
import { Product } from '../src/entity/Product.entity';
import { preprocessData } from './preprocessor/index';
import { uploadProducts } from './uploader/index';
// @ts-ignore
import productsData from '../data/products';
dotenv.config({ path: '../.env' });

console.log('Starting script');
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  // port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Price, Product],
  extra: {
    ssl: true,
  },
});

const sync = async () => {
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
