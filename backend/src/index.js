"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
const client_1 = require("@prisma/client");
const type_graphql_2 = require("../prisma/generated/type-graphql");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: type_graphql_2.resolvers,
        emitSchemaFile: './generated-schema.graphql',
        validate: false,
    });
    const prisma = new client_1.PrismaClient();
    await prisma.$connect();
    const server = new apollo_server_1.ApolloServer({
        schema,
        context: () => ({ prisma }),
    });
    const { port } = await server.listen(4000);
    console.log(`GraphQL is listening on ${port}!`);
}
main().catch(console.error);
