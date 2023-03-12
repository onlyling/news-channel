export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface LoginInput {
  password: Scalars['String'];
  username: Scalars['String'];
}

export interface LoginResponse {
  __typename?: 'LoginResponse';
  message: Scalars['String'];
}

export interface MeResponse {
  __typename?: 'MeResponse';
  id: Scalars['Int'];
  username: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  login?: Maybe<LoginResponse>;
}


export interface MutationLoginArgs {
  input: LoginInput;
}

export interface Post {
  __typename?: 'Post';
  authorId: Scalars['Int'];
  categoryId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  _service?: Maybe<_Service>;
  me?: Maybe<MeResponse>;
}

export interface User {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  posts: Array<Maybe<Post>>;
  username: Scalars['String'];
}

export interface _Service {
  __typename?: '_service';
  sdl: Scalars['String'];
}
