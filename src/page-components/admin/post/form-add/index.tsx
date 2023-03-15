import { Space, Card, Form, Button, Select, Input, message } from 'antd'
import { useRouter } from 'next/router'
import React, { memo } from 'react'

import { useCategoryListQuery } from '@/graphql/operations/__generated__/category.generated'
import { usePostAddMutation } from '@/graphql/operations/__generated__/post.generated'

import AdminPostEditor from '../editor'

interface FormValues {
  title: string
  categoryId: number
  content: string
}

export interface AdminPostFormAddProps {
  initialValues?: any
}

const AdminPostFormAdd: React.FC<AdminPostFormAddProps> = ({
  initialValues,
}) => {
  const { back } = useRouter()
  const [form] = Form.useForm<FormValues>()
  const { loading: loadingCategoryList, data: dataCategoryList } =
    useCategoryListQuery()
  const [mutationPostAdd, { loading: loadingPostAdd }] = usePostAddMutation()

  const genClick = (status: 1 | 2) => () => {
    form.validateFields().then(values => {
      console.log(values)

      mutationPostAdd({
        variables: {
          input: {
            title: values.title,
            categoryId: values.categoryId,
            content: values.content,
            published: status === 2,
          },
        },
      }).then(() => {
        message.success('操作成功~')
        back()
      })
    })
  }

  return (
    <Form form={form} initialValues={initialValues} layout="vertical">
      <Card>
        <Form.Item
          label="分类"
          name="categoryId"
          rules={[
            {
              required: true,
              message: '请选择分类',
            },
          ]}>
          <Select
            placeholder="请选择分类"
            disabled={loadingCategoryList}
            options={dataCategoryList?.categoryList}
          />
        </Form.Item>

        <Form.Item
          label="标题"
          name="title"
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}>
          <Input placeholder="请输入标题" />
        </Form.Item>

        <Form.Item label="内容" name="content">
          <AdminPostEditor />
        </Form.Item>

        <Space>
          <Button onClick={genClick(1)}>保存</Button>

          <Button type="primary" onClick={genClick(2)} loading={loadingPostAdd}>
            发布
          </Button>
        </Space>
      </Card>
    </Form>
  )
}

export default memo(AdminPostFormAdd)
