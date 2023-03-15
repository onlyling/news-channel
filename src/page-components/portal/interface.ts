import type { PostPublishedPageQuery } from '@/graphql/operations/__generated__/post.generated'

export type ItemData =
  PostPublishedPageQuery['postPublishedPage']['records'][number]
