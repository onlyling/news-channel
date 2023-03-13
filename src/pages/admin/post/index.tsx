import Link from 'next/link'
import React from 'react'

import LayoutAdmin from '@/layouts/admin'

const AdminPost: React.FC = () => {
  return (
    <LayoutAdmin>
      <Link href="/admin/post/add">新增</Link>
      <div>Post</div>
    </LayoutAdmin>
  )
}

export default AdminPost
