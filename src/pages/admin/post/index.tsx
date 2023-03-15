import PlusOutlined from '@ant-design/icons/PlusOutlined'
import { Form, Space, Table, Divider, Button, Card, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table/interface'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'

import { PostPageDocument } from '@/graphql/operations/__generated__/post.generated'
import useTableRequest from '@/hooks/useTableRequest'
import LayoutAdmin, { LayoutAdminContent } from '@/layouts/admin'
import AdminPostFormSearch from '@/page-components/admin/post/form-search'
import type { ItemData } from '@/page-components/admin/post/interface'

const AdminPost: React.FC = () => {
  const { push } = useRouter()
  const [form] = Form.useForm()
  const { tableProps, search } = useTableRequest<ItemData>({
    gql: PostPageDocument,
    gqlDataField: 'postPage',
    buildVariables: (page, formData) => {
      return {
        input: formData,
        page,
      }
    },
    form,
  })
  const { submit, reset } = search

  const columns: ColumnsType<ItemData> = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '发布状态',
      dataIndex: 'published',
      width: 120,
      render: text =>
        text ? <Tag color="success">公开</Tag> : <Tag>未公开</Tag>,
    },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      width: 160,
      render: text => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: '操作',
      width: 160,
      render: (_, record) => {
        return (
          <Space>
            {record.published ? (
              <a>下架</a>
            ) : (
              <>
                <a>编辑</a>
                <Divider type="vertical" />
                <a
                  className="text-red-600 hover:text-red-300"
                  onClick={() => {
                    // mutationCategoryDelete({
                    //   variables: {
                    //     input: {
                    //       id: record.id,
                    //     },
                    //   },
                    // }).then(() => {
                    //   submit()
                    // })
                  }}>
                  删除
                </a>
              </>
            )}
          </Space>
        )
      },
    },
  ]

  return (
    <LayoutAdmin>
      <LayoutAdminContent>
        <Space direction="vertical" className="w-[100%]" size="middle">
          <AdminPostFormSearch form={form} onSubmit={submit} onReset={reset} />

          <Card>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                push('/admin/post/add')
              }}>
              新增
            </Button>

            <div className="h-[12px]" />

            <Table rowKey="id" columns={columns} {...tableProps} />
          </Card>
        </Space>
      </LayoutAdminContent>
    </LayoutAdmin>
  )
}

export default AdminPost
