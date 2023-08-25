import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { AppDataSource } from './data-source';
import { ProductsTypeDefs } from './schema';
import { ProductQueries, ProductMutations } from './resolvers/Products';
import { startStandaloneServer } from '@apollo/server/standalone';

const main = async () => {
  await AppDataSource.initialize().catch((error) => {
    console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
    console.error(error);
  });

  const server = new ApolloServer({
    typeDefs: ProductsTypeDefs,
    resolvers: [ProductQueries, ProductMutations],
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4005 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main().catch((err) => console.error(err));
