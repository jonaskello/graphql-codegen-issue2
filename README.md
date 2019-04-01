## How to test

Generate from joined schema:

```bash
$ yarn graphql
```

Generates this incomplete type for `FooBar` (`Zoo` is missing in the union):

```ts
export type FooBar = Foo | Bar;
```

Printing the joined schema gives the correct type of `FooBar` with `Zoo` included so it seems the joining works:

```bash
$ yarn print
```

```graphql
type Bar {
  id: ID!
}

type Foo {
  id: ID!
}

union FooBar = Foo | Bar | Zoo

type Query {
  fooBar: [FooBar!]!
}

type Zoo {
  id: ID!
}
```
