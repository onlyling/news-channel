import React from 'react'

import LayoutAdmin, { LayoutAdminContent } from '@/layouts/admin'
import AdminPostFormAdd from '@/page-components/admin/post/form-add'

const AdminPostAdd: React.FC = () => {
  return (
    <LayoutAdmin>
      <LayoutAdminContent>
        <AdminPostFormAdd />
      </LayoutAdminContent>
    </LayoutAdmin>
  )
}

export default AdminPostAdd
