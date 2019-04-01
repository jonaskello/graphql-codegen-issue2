import gql from "graphql-tag";

export const schema2 = gql`
  extend union FooBar = Zoo

  type Zoo {
    id: ID!
  }
`;
