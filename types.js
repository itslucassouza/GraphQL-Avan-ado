const { gql, ApolloServer } = require("apollo-server");

/**
 * Scalar types
 * -Int
 * -Float
 * -String
 * -Boolean
 * -ID
 */

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`;

const resolvers = {
  Query: {
    idade() {
      return 18;
    },
    salario() {
      return 12345;
    },
    nome() {
      return "Lucas";
    },
    ativo() {
      return true;
    },
    id() {
      return "15689";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
