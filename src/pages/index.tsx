import { Pagination } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

import { PostPublishedPageDocument } from '@/graphql/operations/__generated__/post.generated'
import useTableRequest from '@/hooks/useTableRequest'
import LayoutPortal from '@/layouts/portal'
import type { ItemData } from '@/page-components/portal/interface'
import PortalListItem from '@/page-components/portal/list-item'

const Index: React.FC = () => {
  const { query } = useRouter()
  const { tableProps } = useTableRequest<ItemData>({
    gql: PostPublishedPageDocument,
    gqlDataField: 'postPublishedPage',
    buildVariables: (page, formData) => {
      return {
        input: formData,
        page,
      }
    },
  })

  return (
    <LayoutPortal activedCategory={query.c ? +query.c : undefined}>
      <div>第一个页面</div>

      {tableProps.dataSource.map(item => {
        return <PortalListItem key={item.id} data={item} />
      })}

      <Pagination {...tableProps.pagination} size="small" />
    </LayoutPortal>
  )
}

export default Index
