import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { Form, Space, Table, Divider, Button, Card } from 'antd'
import type { ColumnsType } from 'antd/es/table/interface'
import React, { useRef } from 'react'

import {
  CategoryPageDocument,
  useCategoryDeleteMutation,
} from '@/graphql/operations/__generated__/category.generated'
import useTableRequest from '@/hooks/useTableRequest'
import LayoutAdmin, { LayoutAdminContent } from '@/layouts/admin'
import AdminCategoryFormSearch from '@/page-components/admin/category/form-search'
import type { ItemData } from '@/page-components/admin/category/interface'
import type { AdminCategoryModalAddInstance } from '@/page-components/admin/category/modal-add'
import AdminCategoryModalAdd from '@/page-components/admin/category/modal-add'

const AdminCategory: React.FC = () => {
  const [form] = Form.useForm()
  const AdminCategoryModalAddRef = useRef<AdminCategoryModalAddInstance>(null)
  const { tableProps, search } = useTableRequest<ItemData>({
    gql: CategoryPageDocument,
    gqlDataField: 'categoryPage',
    buildVariables: (page, formData) => {
      return {
        input: formData,
        page,
      }
    },
    form,
  })
  const [mutationCategoryDelete, { loading: loadingCategoryDelete }] =
    useCategoryDeleteMutation()
  const { submit, reset } = search

  const columns: ColumnsType<ItemData> = [
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      title: '操作',
      width: 200,
      render: (_, record) => {
        return (
          <Space>
            <a
              onClick={() => {
                AdminCategoryModalAddRef.current?.show({
                  data: record,
                  callback: () => {
                    submit()
                  },
                })
              }}>
              编辑
            </a>
            <Divider type="vertical" />
            <a
              className="text-red-600 hover:text-red-300"
              onClick={() => {
                mutationCategoryDelete({
                  variables: {
                    input: {
                      id: record.id,
                    },
                  },
                }).then(() => {
                  submit()
                })
              }}>
              删除
            </a>
          </Space>
        )
      },
    },
  ]

  return (
    <LayoutAdmin>
      <LayoutAdminContent>
        <Space direction="vertical" className="w-[100%]" size="middle">
          <AdminCategoryFormSearch
            form={form}
            onSubmit={submit}
            onReset={reset}
          />

          <Card>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                AdminCategoryModalAddRef.current?.show({
                  callback: () => {
                    submit()
                  },
                })
              }}>
              新增
            </Button>

            <div className="h-[12px]" />

            <Table
              rowKey="id"
              columns={columns}
              {...tableProps}
              loading={tableProps.loading || loadingCategoryDelete}
            />
          </Card>
        </Space>

        <AdminCategoryModalAdd ref={AdminCategoryModalAddRef} />
      </LayoutAdminContent>
    </LayoutAdmin>
  )
}

export default AdminCategory
