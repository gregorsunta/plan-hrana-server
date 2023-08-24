import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { AppDataSource } from './data-source';
import { ProductsTypeDefs } from './schema';
import { ProductQueries, ProductMutations } from './resolvers/Products';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Express } from 'express';

const main = async () => {
  await AppDataSource.initialize().catch((error) => console.log(error));

  const server = new ApolloServer({
    typeDefs: ProductsTypeDefs,
    resolvers: [ProductQueries, ProductMutations],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main().catch((err) => console.error(err));
