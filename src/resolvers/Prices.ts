import { AppDataSource } from '../data-source.js';
import { Prices } from '../entity/index.js';

export const PricesQueries = {
  Query: {
    shops: async () => {
      const pricesRepository = AppDataSource.getRepository(Prices);
      const categories = await pricesRepository
        .createQueryBuilder('price')
        .select('price.trgovina')
        .distinct(true)
        .getRawMany();
      return categories.map((shop) => shop.price_trgovina);
    },
  },
};
