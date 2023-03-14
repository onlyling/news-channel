import { Card, Form, Input, Row, Col, Button, Space, Select } from 'antd'
import type { FormInstance } from 'antd/es/form'
import React, { memo } from 'react'

import { useCategoryListQuery } from '@/graphql/operations/__generated__/category.generated'

interface AdminPostFormSearchProps {
  form: FormInstance<any>
  onSubmit?: () => void
  onReset?: () => void
}

const AdminPostFormSearch: React.FC<AdminPostFormSearchProps> = ({
  form,
  onSubmit,
  onReset,
}) => {
  const { loading: loadingCategoryList, data: dataCategoryList } =
    useCategoryListQuery()

  return (
    <Card>
      <Form form={form}>
        <Row gutter={12}>
          <Col span={6}>
            <Form.Item label="关键词" name="keyword">
              <Input placeholder="请输入关键词" allowClear />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="分类" name="categoryId">
              <Select
                placeholder="请选择分类"
                allowClear
                disabled={loadingCategoryList}
                options={dataCategoryList?.categoryList}
              />
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

export default memo(AdminPostFormSearch)
