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

export interface Category {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
}

export interface CategoryAddInput {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
}

export interface CategoryDeleteInput {
  id: Scalars['Int'];
}

export interface CategoryDeleteResponse {
  __typename?: 'CategoryDeleteResponse';
  message: Scalars['String'];
}

export interface CategoryPageInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface CategoryPageResponse {
  __typename?: 'CategoryPageResponse';
  current: Scalars['Int'];
  pageSize: Scalars['Int'];
  records: Array<Category>;
  total: Scalars['Int'];
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
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  categoryAdd: Category;
  categoryDelete: CategoryDeleteResponse;
  login: LoginResponse;
  postAdd: Post;
}


export interface MutationCategoryAddArgs {
  input: CategoryAddInput;
}


export interface MutationCategoryDeleteArgs {
  input: CategoryDeleteInput;
}


export interface MutationLoginArgs {
  input: LoginInput;
}


export interface MutationPostAddArgs {
  input: PostAddInput;
}

export interface Page {
  pageCurrent: Scalars['Int'];
  pageSize: Scalars['Int'];
}

export interface Post {
  __typename?: 'Post';
  author: Scalars['String'];
  authorId: Scalars['Int'];
  category: Scalars['String'];
  categoryId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
}

export interface PostAddInput {
  categoryId: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
}

export interface PostPageInput {
  categoryId?: InputMaybe<Scalars['Int']>;
  keyword?: InputMaybe<Scalars['String']>;
}

export interface PostPageResponse {
  __typename?: 'PostPageResponse';
  current: Scalars['Int'];
  pageSize: Scalars['Int'];
  records: Array<Maybe<Post>>;
  total: Scalars['Int'];
}

export interface Query {
  __typename?: 'Query';
  _service?: Maybe<_Service>;
  categoryList: Array<Category>;
  categoryPage: CategoryPageResponse;
  me: MeResponse;
  postPage: PostPageResponse;
}


export interface QueryCategoryPageArgs {
  input?: InputMaybe<CategoryPageInput>;
  page?: InputMaybe<Page>;
}


export interface QueryPostPageArgs {
  input?: InputMaybe<PostPageInput>;
  page?: InputMaybe<Page>;
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
