import { Products } from '../entity/Products.entity.js';
import { Prices } from '../entity/Prices.entity.js';
import { AppDataSource } from '../data-source.js';
import { Categories } from '../entity/index.js';

export const CategoriesQueries = {
  Query: {
    categories: async () => {
      const productsRepository = AppDataSource.getRepository(Categories);
      return await productsRepository.find();
    },
    category: async (_: any, { id }: { id: number }) => {
      const productsRepository = AppDataSource.getRepository(Categories);
      const category = await productsRepository.findOne({
        where: {
          id: id,
        },
        // relations: ['prices'],
      });
      return category;
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
