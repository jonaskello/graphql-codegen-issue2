import gql from "graphql-tag";

export const schema1 = gql`
  type Query {
    fooBar: [FooBar!]!
  }

  union FooBar = Foo | Bar

  type Foo {
    id: ID!
  }

  type Bar {
    id: ID!
  }
`;
