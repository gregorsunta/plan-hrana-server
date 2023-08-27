import { Products } from '../entity/Products.entity';
import { Prices } from '../entity/Prices.entity';
import { AppDataSource } from '../data-source';

export const ProductsQueries = {
  Query: {
    product: async (_: any, { id }: { id: number }) => {
      const productsRepository = AppDataSource.getRepository(Products);

      const product = await productsRepository.findOne({
        where: {
          id: id,
        },
      });
      return product;
    },
    products: async (_: any, { kategorija }: { kategorija: string }) => {
      const productsRepository = AppDataSource.getRepository(Products);

      const products = await productsRepository.find({
        where: {
          kategorija: kategorija,
        },
      });
      return products;
    },
    kategorije: async () => {
      const productsRepository = AppDataSource.getRepository(Products);

      const kategorije = await productsRepository
        .createQueryBuilder('product')
        .select('product.kategorija')
        .distinct(true)
        .getRawMany();

      return kategorije.map((kategorija) => kategorija.product_kategorija);
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
