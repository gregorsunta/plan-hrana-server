import dotenv from 'dotenv';
import fs from 'fs';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Prices } from '../src/entity/Prices.entity.js';
import { Products } from '../src/entity/Products.entity.js';
import { parseFromJSON, preprocessProducts } from './preprocessor/index.js';
import { uploadCategories, uploadProducts } from './uploader/index.js';
import { Categories } from '../src/entity/Categories.entity.js';

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
  entities: [Prices, Products, Categories],
  extra: {
    ssl: process.env.DB_SSL,
  },
});

const uploadData = async (filePath: string) => {
  await AppDataSource.initialize()
    .then(() => console.info('AppDataSource initialized'))
    .catch((err) => {
      console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
      console.error(err);
    });
  console.log('Starting uploadCategories');

  const file = fs.readFileSync(filePath, 'utf-8');

  const js = parseFromJSON(file);
  uploadCategories(AppDataSource, js);
};

await uploadData('../data/categoryData.json');
