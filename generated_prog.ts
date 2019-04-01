
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Bar = {
  id: Scalars['ID'],
};

export type Foo = {
  id: Scalars['ID'],
};

export type FooBar = Foo | Bar | Zoo;

export type Query = {
  fooBar: Array<FooBar>,
};

export type Zoo = {
  id: Scalars['ID'],
};
