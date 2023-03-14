import { Modal, Form, Input } from 'antd'
import { forwardRef, useImperativeHandle, memo, useState, useRef } from 'react'

import { useCategoryAddMutation } from '@/graphql/operations/__generated__/category.generated'

import type { ItemData } from '../interface'

export interface AdminCategoryModalAddInstance {
  show: (v: { data?: ItemData; callback: () => void }) => void
}

const AdminCategoryModalAdd = forwardRef<AdminCategoryModalAddInstance>(
  (_, ref) => {
    const [open, setOpen] = useState(false)
    const Callback = useRef(() => {})
    const [form] = Form.useForm<ItemData>()
    const [fetchCategoryAdd, { loading: loadingCategoryAdd }] =
      useCategoryAddMutation()

    useImperativeHandle(
      ref,
      () => ({
        show: ({ callback, data }) => {
          Callback.current = callback

          if (data) {
            form.setFieldsValue(data)
          } else {
            form.resetFields()
          }

          setOpen(true)
        },
      }),
      [form],
    )

    return (
      <Modal
        title="详情"
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              fetchCategoryAdd({ variables: { input: values } })
            })
            .then(() => {
              Callback.current?.()
              setOpen(false)
            })
        }}
        confirmLoading={loadingCategoryAdd}>
        <Form form={form}>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>

          <Form.Item
            label="分类名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}>
            <Input placeholder="请输入分类名称" />
          </Form.Item>
        </Form>
      </Modal>
    )
  },
)

export default memo(AdminCategoryModalAdd)
