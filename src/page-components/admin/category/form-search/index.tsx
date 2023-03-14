import { Card, Form, Input, Row, Col, Button, Space } from 'antd'
import type { FormInstance } from 'antd/es/form'
import React, { memo } from 'react'

interface AdminCategoryFormSearchProps {
  form: FormInstance<any>
  onSubmit?: () => void
  onReset?: () => void
}

const AdminCategoryFormSearch: React.FC<AdminCategoryFormSearchProps> = ({
  form,
  onSubmit,
  onReset,
}) => {
  return (
    <Card>
      <Form form={form}>
        <Row>
          <Col span={6}>
            <Form.Item label="分类名称" name="name">
              <Input placeholder="请输入分类名称" />
            </Form.Item>
          </Col>
        </Row>

        <Space>
          <Button type="primary" onClick={onSubmit}>
            搜索
          </Button>
          <Button onClick={onReset}>重置</Button>
        </Space>
      </Form>
    </Card>
  )
}

export default memo(AdminCategoryFormSearch)
