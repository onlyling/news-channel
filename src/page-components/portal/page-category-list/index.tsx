import { Pagination, Spin, Form } from 'antd'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import { PostPublishedPageDocument } from '@/graphql/operations/__generated__/post.generated'
import useTableRequest from '@/hooks/useTableRequest'
import LayoutPortal from '@/layouts/portal'
import type { ItemData } from '@/page-components/portal/interface'
import PortalListItem from '@/page-components/portal/list-item'

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      a: 1,
    },
  }
}

const PageCategoryList: React.FC<{ a: number }> = ({ a }) => {
  const { query } = useRouter()
  const [form] = Form.useForm()
  const { tableProps } = useTableRequest<ItemData>({
    gql: PostPublishedPageDocument,
    gqlDataField: 'postPublishedPage',
    buildVariables: (page, formData) => {
      return {
        input: formData,
        page,
      }
    },
    form,
    refreshDeps: [query.id],
  })

  return (
    <LayoutPortal activedCategory={query.id ? +query.id : undefined}>
      <Form form={form}>
        <Form.Item hidden name="categoryId">
          <input />
        </Form.Item>
      </Form>

      <Spin spinning={tableProps.loading}>
        {tableProps.dataSource.map(item => {
          return <PortalListItem key={item.id} data={item} />
        })}
      </Spin>

      <Pagination
        {...tableProps.pagination}
        size="small"
        className="flex justify-center py-[32px]"
      />
    </LayoutPortal>
  )
}

export default PageCategoryList
