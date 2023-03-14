import type { PostPageQuery } from '@/graphql/operations/__generated__/post.generated'

export type ItemData = PostPageQuery['postPage']['records'][number]
