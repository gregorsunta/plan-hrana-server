import { preprocessData } from './preprocessor/index';
import { uploadProducts } from './uploader/index';
// @ts-ignore
import productsData from '../data/products';

console.log('SCRIPT LOADED');

const sync = () => {
  console.log('Starting sync process');
  const preprocessedProductsData = preprocessData(productsData);
  uploadProducts(preprocessedProductsData);
};

sync();
