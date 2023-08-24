import { AppDataSource } from '../../src/data-source';
import { Product } from '../../src/entity/Product.entity';
import { Price } from '../../src/entity/Price.entity';

AppDataSource.initialize();

export const uploadProducts = async (preprocessedProductsData: any) => {
  const productsRepo = AppDataSource.getRepository(Product);
  const pricesRepo = AppDataSource.getRepository(Price);
  const pauseDuration = 100;

  for (let i = 0; i < preprocessedProductsData.length; i++) {
    if (i % 100 === 0) {
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
