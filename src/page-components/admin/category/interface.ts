import type { CategoryPageQuery } from '@/graphql/operations/__generated__/category.generated'

export type ItemData = CategoryPageQuery['categoryPage']['records'][number]
