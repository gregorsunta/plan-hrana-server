import { Products } from '../entity/Products.entity.ts';
import { Prices } from '../entity/Prices.entity.ts';
import { AppDataSource } from '../data-source.ts';
import { Categories } from '../entity/index.ts';

export const CategoriesQueries = {
  Query: {
    categories: async () => {
      const productsRepository = AppDataSource.getRepository(Categories);
      return await productsRepository.find();
    },
    subcategories: async () => {
      const productsRepository = AppDataSource.getRepository(Products);

      const categories = await productsRepository
        .createQueryBuilder('product')
        .select('product.kategorija')
        .distinct(true)
        .getRawMany();

      return categories.map((subcategory) => subcategory.product_kategorija);
    },
  },
};
