import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

import { ProductResolver, CategoryResolver } from "./resolvers";
import path from "node:path";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ProductResolver, CategoryResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server listening on ${url}`);
}

bootstrap();
