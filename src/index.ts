import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { AppDataSource } from './data-source';
import { ProductsTypeDefs } from './schema';
import { ProductQueries, ProductMutations } from './resolvers/Products';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  await AppDataSource.initialize().catch((error) => {
    console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
    console.error(error);
  });

  const server = new ApolloServer({
    typeDefs: ProductsTypeDefs,
    resolvers: [ProductQueries, ProductMutations],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  const graphqlPath = '/graphql';
  app.use(
    graphqlPath,
    cors(),
    bodyParser.json({ limit: '50mb' }),
    expressMiddleware(server),
  );

  await new Promise((resolve) =>
    httpServer.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000${graphqlPath}`);
    }),
  );
};

main().catch((err) => console.error(err));
