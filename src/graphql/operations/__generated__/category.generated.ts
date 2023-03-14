import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type CategoryPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CategoryPageInput>
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
}>

export interface CategoryPageQuery {
  categoryPage: {
    __typename?: 'CategoryPageResponse'
    current: number
    pageSize: number
    total: number
    records: Array<{ __typename?: 'Category'; id: number; name: string }>
  }
}

export type CategoryAddMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CategoryAddInput
}>

export interface CategoryAddMutation {
  categoryAdd: {
    __typename?: 'CategoryAddResponse'
    category?: { __typename?: 'Category'; id: number; name: string }
  }
}

export type CategoryDeleteMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CategoryDeleteInput
}>

export interface CategoryDeleteMutation {
  categoryDelete: { __typename?: 'CategoryDeleteResponse'; message: string }
}

export type CategoryListQueryVariables = SchemaTypes.Exact<{
  [key: string]: never
}>

export interface CategoryListQuery {
  categoryList: Array<{ __typename?: 'Category'; value: number; label: string }>
}

export const CategoryPageDocument = gql`
  query categoryPage($input: CategoryPageInput, $page: Page) {
    categoryPage(input: $input, page: $page) {
      current
      pageSize
      total
      records {
        id
        name
      }
    }
  }
`

/**
 * __useCategoryPageQuery__
 *
 * To run a query within a React component, call `useCategoryPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCategoryPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoryPageQuery,
    CategoryPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoryPageQuery, CategoryPageQueryVariables>(
    CategoryPageDocument,
    options,
  )
}
export function useCategoryPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryPageQuery,
    CategoryPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoryPageQuery, CategoryPageQueryVariables>(
    CategoryPageDocument,
    options,
  )
}
export type CategoryPageQueryHookResult = ReturnType<
  typeof useCategoryPageQuery
>
export type CategoryPageLazyQueryHookResult = ReturnType<
  typeof useCategoryPageLazyQuery
>
export type CategoryPageQueryResult = Apollo.QueryResult<
  CategoryPageQuery,
  CategoryPageQueryVariables
>
export const CategoryAddDocument = gql`
  mutation categoryAdd($input: CategoryAddInput!) {
    categoryAdd(input: $input) {
      category {
        id
        name
      }
    }
  }
`
export type CategoryAddMutationFn = Apollo.MutationFunction<
  CategoryAddMutation,
  CategoryAddMutationVariables
>

/**
 * __useCategoryAddMutation__
 *
 * To run a mutation, you first call `useCategoryAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategoryAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoryAddMutation, { data, loading, error }] = useCategoryAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CategoryAddMutation,
    CategoryAddMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CategoryAddMutation, CategoryAddMutationVariables>(
    CategoryAddDocument,
    options,
  )
}
export type CategoryAddMutationHookResult = ReturnType<
  typeof useCategoryAddMutation
>
export type CategoryAddMutationResult =
  Apollo.MutationResult<CategoryAddMutation>
export type CategoryAddMutationOptions = Apollo.BaseMutationOptions<
  CategoryAddMutation,
  CategoryAddMutationVariables
>
export const CategoryDeleteDocument = gql`
  mutation categoryDelete($input: CategoryDeleteInput!) {
    categoryDelete(input: $input) {
      message
    }
  }
`
export type CategoryDeleteMutationFn = Apollo.MutationFunction<
  CategoryDeleteMutation,
  CategoryDeleteMutationVariables
>

/**
 * __useCategoryDeleteMutation__
 *
 * To run a mutation, you first call `useCategoryDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategoryDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoryDeleteMutation, { data, loading, error }] = useCategoryDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CategoryDeleteMutation,
    CategoryDeleteMutationVariables
  >(CategoryDeleteDocument, options)
}
export type CategoryDeleteMutationHookResult = ReturnType<
  typeof useCategoryDeleteMutation
>
export type CategoryDeleteMutationResult =
  Apollo.MutationResult<CategoryDeleteMutation>
export type CategoryDeleteMutationOptions = Apollo.BaseMutationOptions<
  CategoryDeleteMutation,
  CategoryDeleteMutationVariables
>
export const CategoryListDocument = gql`
  query categoryList {
    categoryList {
      value: id
      label: name
    }
  }
`

/**
 * __useCategoryListQuery__
 *
 * To run a query within a React component, call `useCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoryListQuery,
    CategoryListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoryListQuery, CategoryListQueryVariables>(
    CategoryListDocument,
    options,
  )
}
export function useCategoryListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryListQuery,
    CategoryListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(
    CategoryListDocument,
    options,
  )
}
export type CategoryListQueryHookResult = ReturnType<
  typeof useCategoryListQuery
>
export type CategoryListLazyQueryHookResult = ReturnType<
  typeof useCategoryListLazyQuery
>
export type CategoryListQueryResult = Apollo.QueryResult<
  CategoryListQuery,
  CategoryListQueryVariables
>
