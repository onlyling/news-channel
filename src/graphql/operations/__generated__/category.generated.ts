import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type CategoryPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.CategoryPageInput>
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
}>

export interface CategoryPageQuery {
  categoryPage?: {
    __typename?: 'CategoryPageResponse'
    current: number
    pageSize: number
    total: number
    records: Array<{ __typename?: 'Category'; id: number; name: string }>
  }
}

export type MutationMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CategoryAddInput
}>

export interface MutationMutation {
  categoryAdd?: {
    __typename?: 'CategoryAddResponse'
    category?: { __typename?: 'Category'; id: number; name: string }
  }
}

export const CategoryPageDocument = gql`
  query CategoryPage($input: CategoryPageInput, $page: Page) {
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
export const MutationDocument = gql`
  mutation Mutation($input: CategoryAddInput!) {
    categoryAdd(input: $input) {
      category {
        id
        name
      }
    }
  }
`
export type MutationMutationFn = Apollo.MutationFunction<
  MutationMutation,
  MutationMutationVariables
>

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MutationMutation,
    MutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<MutationMutation, MutationMutationVariables>(
    MutationDocument,
    options,
  )
}
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>
export type MutationMutationOptions = Apollo.BaseMutationOptions<
  MutationMutation,
  MutationMutationVariables
>
