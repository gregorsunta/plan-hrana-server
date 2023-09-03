import { Prices } from '../entity/Prices.entity.js';
import { AppDataSource } from '../data-source.js';
import { Products } from '../entity/Products.entity.js';
import { In } from 'typeorm';

export const ProductsQueries = {
  Query: {
    product: async (_: any, { id }: { id: number }) => {
      const productsRepository = AppDataSource.getRepository(Products);

      const product = await productsRepository.findOne({
        where: {
          id: id,
        },
        relations: ['prices'],
      });
      return product;
    },

    products: async (
      _: any,
      {
        categories,
        page,
        pageSize,
        shops,
      }: {
        categories: string[];
        page: number;
        pageSize: number;
        shops: string[];
      },
    ) => {
      const productsRepository = AppDataSource.getRepository(Products);

      const query = productsRepository
        .createQueryBuilder('product')
        .where('product.kategorija IN (:...categories)', { categories })
        .skip((page - 1) * pageSize)
        .take(pageSize);

      if (shops) {
        query.innerJoinAndSelect(
          'product.prices',
          'price',
          'price.trgovina IN (:...shops)',
          { shops },
        );
      } else {
        query.innerJoinAndSelect('product.prices', 'price');
      }

      const products = await query.getMany();

      const filterPrices = (prices: Prices[]): Prices[] => {
        const latestPrices: { [trgovina: string]: Prices } = {};

        prices.forEach((price) => {
          if (!price.redna_cena_na_kilogram_liter || 0) {
            return;
          }
          const { trgovina, datestamp } = price;

          if (
            !latestPrices[trgovina] ||
            datestamp > latestPrices[trgovina].datestamp
          ) {
            latestPrices[trgovina] = price;
          }
        });

        return Object.values(latestPrices);
      };

      const produkti = products.map((product) => ({
        ...product,
        prices: filterPrices(product.prices),
      }));

      return produkti;
    },
  },
};

export const ProductsMutations = {
  Mutation: {
    addProducts: async (_: any, { products }: { products: Products[] }) => {
      const addedProducts: Products[] = [];
      const productsRepository = AppDataSource.getRepository(Products);
      const pricesRepository = AppDataSource.getRepository(Prices);

      for (const product of products) {
        const { prices, ...productWithoutPrices } = product;
        const newProduct = productsRepository.create(productWithoutPrices);

        const savedProduct = await productsRepository.save(newProduct);
        const savedPrices: Prices[] = [];

        for (const price of prices) {
          const newPrice = pricesRepository.create(price);
          const savedPrice = await pricesRepository.save(newPrice);
          savedPrices.push(savedPrice);
        }
        const addedProduct: Products = {
          ...(savedProduct as Products),
          prices: [...savedPrices],
        };

        addedProducts.push(addedProduct);
      }
      return addedProducts;
    },
  },
};
