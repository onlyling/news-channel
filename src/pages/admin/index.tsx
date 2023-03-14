import { Button, Form, Input, Spin } from 'antd'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import Redirect from '@/components/redirect'
import {
  useLoginMutation,
  useMeQuery,
} from '@/graphql/operations/__generated__/user.generated'

interface FormValues {
  username: string
  password: string
}

const Admin: React.FC = () => {
  const { replace } = useRouter()
  const [form] = Form.useForm<FormValues>()
  const [mutationLogin, { loading: loadingLogin }] = useLoginMutation()
  const { loading: loadingMe, data: dataMe } = useMeQuery()
  const onClickLogin = useCallback(() => {
    form.validateFields().then(values => {
      mutationLogin({
        variables: {
          input: values,
        },
      }).then(() => {
        replace('/admin/home')
      })
    })
  }, [form, mutationLogin, replace])

  if (loadingMe) {
    return <Spin />
  }

  if (typeof dataMe?.me.id === 'number') {
    return <Redirect href="/admin/home" replace />
  }

  return (
    <div className="w-[300px] mx-auto my-auto mt-2 mb-2 p-[12px] rounded-[4px] bg-slate-50">
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" loading={loadingLogin} onClick={onClickLogin}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Admin
