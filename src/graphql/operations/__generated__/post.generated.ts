import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type PostPageQueryVariables = SchemaTypes.Exact<{
  input?: SchemaTypes.InputMaybe<SchemaTypes.PostPageInput>
  page?: SchemaTypes.InputMaybe<SchemaTypes.Page>
}>

export interface PostPageQuery {
  postPage: {
    __typename?: 'PostPageResponse'
    total: number
    current: number
    pageSize: number
    records: Array<{
      __typename?: 'Post'
      id: number
      title: string
      published: boolean
      updatedAt: number
      categoryId: number
      category: string
      author: string
    }>
  }
}

export type PostAddMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.PostAddInput
}>

export interface PostAddMutation {
  postAdd: { __typename?: 'Post'; id: number }
}

export const PostPageDocument = gql`
  query postPage($input: PostPageInput, $page: Page) {
    postPage(input: $input, page: $page) {
      total
      current
      pageSize
      records {
        id
        title
        published
        updatedAt
        categoryId
        category
        author
      }
    }
  }
`

/**
 * __usePostPageQuery__
 *
 * To run a query within a React component, call `usePostPageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePostPageQuery(
  baseOptions?: Apollo.QueryHookOptions<PostPageQuery, PostPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostPageQuery, PostPageQueryVariables>(
    PostPageDocument,
    options,
  )
}
export function usePostPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostPageQuery,
    PostPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostPageQuery, PostPageQueryVariables>(
    PostPageDocument,
    options,
  )
}
export type PostPageQueryHookResult = ReturnType<typeof usePostPageQuery>
export type PostPageLazyQueryHookResult = ReturnType<
  typeof usePostPageLazyQuery
>
export type PostPageQueryResult = Apollo.QueryResult<
  PostPageQuery,
  PostPageQueryVariables
>
export const PostAddDocument = gql`
  mutation postAdd($input: PostAddInput!) {
    postAdd(input: $input) {
      id
    }
  }
`
export type PostAddMutationFn = Apollo.MutationFunction<
  PostAddMutation,
  PostAddMutationVariables
>

/**
 * __usePostAddMutation__
 *
 * To run a mutation, you first call `usePostAddMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAddMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAddMutation, { data, loading, error }] = usePostAddMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostAddMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostAddMutation,
    PostAddMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PostAddMutation, PostAddMutationVariables>(
    PostAddDocument,
    options,
  )
}
export type PostAddMutationHookResult = ReturnType<typeof usePostAddMutation>
export type PostAddMutationResult = Apollo.MutationResult<PostAddMutation>
export type PostAddMutationOptions = Apollo.BaseMutationOptions<
  PostAddMutation,
  PostAddMutationVariables
>
