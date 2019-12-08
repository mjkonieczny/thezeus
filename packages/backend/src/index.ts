import express from 'express';
import  { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;

const app = express()
app.use(cors({ allowedHeaders: '*' }))
app.use(bodyParser.json())

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app })

app.listen(port, () => process.stdout.write(`Running on :${port} ${server.graphqlPath}\n`));

// if (module.hot) {
//   module.hot.accept('./app');
// }
