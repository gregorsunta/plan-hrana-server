import dotenv from 'dotenv';

import 'reflect-metadata';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { AppDataSource } from './data-source.js';
import {
  CategoriesTypeDefs,
  PricesTypeDefs,
  ProductsTypeDefs,
} from './schema/index.js';
import {
  ProductsQueries,
  ProductsMutations,
  CategoriesQueries,
  PricesQueries,
} from './resolvers/index.js';
dotenv.config({ path: './.env' });

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  await AppDataSource.initialize().catch((error) => {
    console.error('ERROR OCCURED WHEN CONNECTING TO DATABASE');
    console.error(error);
  });

  const server = new ApolloServer({
    typeDefs: [ProductsTypeDefs, CategoriesTypeDefs, PricesTypeDefs],
    resolvers: [
      ProductsQueries,
      ProductsMutations,
      CategoriesQueries,
      PricesQueries,
    ],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  const graphqlPath = '/graphql';
  app.use(
    graphqlPath,
    cors({ origin: process.env.ALLOWED_ORIGIN }),
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
