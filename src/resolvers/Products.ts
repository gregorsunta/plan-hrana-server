import { Product } from '../entity/Product.entity';
import { Price } from '../entity/Price.entity';
import { AppDataSource } from '../data-source';

export const ProductQueries = {
  Query: {
    product: async (_: any, { id }: { id: any }) => {
      const productsRepository = AppDataSource.getRepository(Product);

      const product = await productsRepository.findOne(id);
      return product;
    },
  },
};

export const ProductMutations = {
  Mutation: {
    addProducts: async (_: any, { products }: { products: Product[] }) => {
      const addedProducts: Product[] = [];
      const productsRepository = AppDataSource.getRepository(Product);
      const pricesRepository = AppDataSource.getRepository(Price);

      for (const product of products) {
        const { prices, ...productWithoutPrices } = product;
        const newProduct = productsRepository.create(productWithoutPrices);

        const savedProduct = await productsRepository.save(newProduct);
        const savedPrices: Price[] = [];

        for (const price of prices) {
          const newPrice = pricesRepository.create(price);
          const savedPrice = await pricesRepository.save(newPrice);
          savedPrices.push(savedPrice);
        }
        const addedProduct: Product = {
          ...(savedProduct as Product),
          prices: [...savedPrices],
        };

        addedProducts.push(addedProduct);
      }
      return addedProducts;
    },
  },
};
