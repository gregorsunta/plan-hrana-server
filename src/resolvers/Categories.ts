import { Products } from '../entity/Products.entity';
import { Prices } from '../entity/Prices.entity';
import { AppDataSource } from '../data-source';
import { Categories } from '../entity';

export const CategoriesQueries = {
  Query: {
    categories: async () => {
      const productsRepository = AppDataSource.getRepository(Categories);
      const categories = await productsRepository.find();

      return categories.map((category) => category.name);
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
