import { Products } from '../../src/entity/Products.entity.js';
import { Prices } from '../../src/entity/Prices.entity.js';
import { Categories } from '../../src/entity/Categories.entity.js';

export const uploadProducts = async (
  dataSource: any,
  preprocessedJSObject: any,
) => {
  console.info('Starting upload');
  const productsRepo = dataSource.getRepository(Products);
  const pricesRepo = dataSource.getRepository(Prices);
  const pauseDuration = 100;

  for (let i = 0; i < preprocessedJSObject.length; i++) {
    if (i % 100 === 0 && i !== 0) {
      console.info('uploaded', i, 'products');
      console.info('calling timeout');
      await new Promise((resolve) => setTimeout(resolve, pauseDuration));
    }

    const product = preprocessedJSObject[i];
    const productEntity = productsRepo.create(product);
    const priceEntities = product.prices.map((price: any) => {
      return pricesRepo.create(price);
    });
    productsRepo.save(productEntity);
    pricesRepo.save(priceEntities);
  }
  console.info('Upload finished. ');
  console.info('total uploaded:', preprocessedJSObject.length, 'products');
};

export const uploadCategories = async (
  dataSource: any,
  preprocessedJSObject: any,
) => {
  console.log('starting uploadCategories');
  const categoriesRepo = dataSource.getRepository(Categories);
  for (let i = 0; i < preprocessedJSObject.length; i++) {
    const category = preprocessedJSObject[i];
    const categoryEntity = categoriesRepo.create(category);
    categoriesRepo.save(categoryEntity);
    console.info('uploaded', i, 'categories');
  }
  console.info('Upload finished. ');
  console.info('total uploaded:', preprocessedJSObject.length, 'categories');
};
