import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import type * as SchemaTypes from '../../generated/types'
const defaultOptions = {} as const
export type PostPageQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>

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
      categoryId: number
      category: string
      author: string
    }>
  }
}

export const PostPageDocument = gql`
  query postPage {
    postPage {
      total
      current
      pageSize
      records {
        id
        title
        published
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
