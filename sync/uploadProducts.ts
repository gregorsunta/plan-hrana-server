import dotenv from 'dotenv';
import fs from 'fs';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Prices } from '../src/entity/Prices.entity.js';
import { Products } from '../src/entity/Products.entity.js';
import { preprocessProducts } from './preprocessor/index.js';
import { uploadProducts } from './uploader/index.js';
import { scrape } from './scraper/index.js';
// @ts-ignore
// import productsData from '../data/products';
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
  entities: [Prices, Products],
  extra: {
    ssl: process.env.DB_SSL,
  },
});

const secondsUinxEpoch = Math.floor(Date.now() / 1000);
const fileName = secondsUinxEpoch + '_' + 'products_prices.json';

const path = `../data/${fileName}`;

const scrapeProducts = async (filePath: string) => {
  await scrape(filePath);
};

const uploadData = async (filePath: string) => {
  await AppDataSource.initialize()
    .then(() => console.info('AppDataSource initialized'))
    .catch((err) => {
      console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
      console.error(err);
    });
  console.log('Starting sync');

  const file = fs.readFileSync(filePath, 'utf-8');

  const preprocessedProductsData = preprocessProducts(file);
  uploadProducts(AppDataSource, preprocessedProductsData);
};

await scrapeProducts(path);
await uploadData(path);
