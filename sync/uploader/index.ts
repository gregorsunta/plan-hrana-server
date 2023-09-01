import { Products } from '../../src/entity/Products.entity.ts';
import { Prices } from '../../src/entity/Prices.entity.ts';

export const uploadProducts = async (
  dataSource: any,
  preprocessedProductsData: any,
) => {
  console.info('Starting upload');
  const productsRepo = dataSource.getRepository(Products);
  const pricesRepo = dataSource.getRepository(Prices);
  const pauseDuration = 100;

  for (let i = 0; i < preprocessedProductsData.length; i++) {
    if (i % 100 === 0 && i !== 0) {
      console.info('uploaded', i, 'products');
      console.info('calling timeout');
      await new Promise((resolve) => setTimeout(resolve, pauseDuration));
    }

    const product = preprocessedProductsData[i];
    const productEntity = productsRepo.create(product);
    const priceEntities = product.prices.map((price: any) => {
      return pricesRepo.create(price);
    });
    productsRepo.save(productEntity);
    pricesRepo.save(priceEntities);
  }
  console.info('Upload finished. ');
  console.info('total uploaded:', preprocessedProductsData.length, 'products');
};
