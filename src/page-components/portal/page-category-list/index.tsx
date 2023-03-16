import { Pagination, Spin, Form } from 'antd'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'

import { PostPublishedPageDocument } from '@/graphql/operations/__generated__/post.generated'
import useTableRequest from '@/hooks/useTableRequest'
import LayoutPortal from '@/layouts/portal'
import type { ItemData } from '@/page-components/portal/interface'
import PortalListItem from '@/page-components/portal/list-item'

const PageCategoryList: React.FC = () => {
  const { query } = useRouter()
  const [form] = Form.useForm()
  const {
    tableProps,
    search: { submit },
  } = useTableRequest<ItemData>({
    gql: PostPublishedPageDocument,
    gqlDataField: 'postPublishedPage',
    buildVariables: (page, formData) => {
      return {
        input: formData,
        page,
      }
    },
    form,
    manual: true,
  })

  useEffect(() => {
    form.setFieldValue('categoryId', +(query.id as string))
    submit()
  }, [form, query.id, submit])

  const { onChange } = tableProps

  const onChangePagination = useCallback(
    (p: number, ps: number) => {
      onChange({ current: p, pageSize: ps })
    },
    [onChange],
  )

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
        onChange={onChangePagination}
        size="small"
        className="flex justify-center py-[32px]"
      />
    </LayoutPortal>
  )
}

export default PageCategoryList
