import { Prices } from '../entity/Prices.entity.ts';
import { AppDataSource } from '../data-source.ts';
import { Products } from '../entity/Products.entity.ts';
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

    productsByCategories: async (
      _: any,
      {
        categories,
        page,
        pageSize,
      }: { categories: any; datestamp: any; page: number; pageSize: number },
    ) => {
      const productsRepository = AppDataSource.getRepository(Products);
      const [products, count] = await productsRepository.findAndCount({
        where: {
          kategorija: In(categories),
        },
        relations: ['prices'],
        skip: (page - 1) * pageSize,
        take: pageSize,
      });

      const filteredProducts = products.map((product) => {
        const uniquePrices = Array.from(
          new Set(product.prices.map((price) => price.trgovina)),
        );
        const uniquePriceObjects = uniquePrices.map((trgovina) => {
          return product.prices.find((price) => price.trgovina === trgovina);
        });
        return { ...product, prices: uniquePriceObjects };
      });

      return filteredProducts;
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
