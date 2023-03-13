import { Card, Form, Input, Row, Col, Button, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table/interface'
import React from 'react'

import type { CategoryPageQuery } from '@/graphql/operations/__generated__/category.generated'
import LayoutAdmin, { LayoutAdminContent } from '@/layouts/admin'

type ItemData = CategoryPageQuery['categoryPage']

const AdminCategory: React.FC = () => {
  const [form] = Form.useForm()

  const columns: ColumnsType<{}> = []

  return (
    <LayoutAdmin>
      <LayoutAdminContent>
        <Space direction="vertical" className="w-[100%]" size="middle">
          <Card>
            <Form form={form}>
              <Row>
                <Col span={6}>
                  <Form.Item label="分类名称">
                    <Input placeholder="请输入分类名称" />
                  </Form.Item>
                </Col>
              </Row>

              <Space>
                <Button type="primary">搜索</Button>
                <Button>重置</Button>
              </Space>
            </Form>
          </Card>

          <Card>
            <Table columns={columns} />
          </Card>
        </Space>
      </LayoutAdminContent>
    </LayoutAdmin>
  )
}

export default AdminCategory
