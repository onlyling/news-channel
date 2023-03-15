import { useRouter } from 'next/router'
import React from 'react'

import { usePostDetailQuery } from '@/graphql/operations/__generated__/post.generated'
import LayoutAdmin, { LayoutAdminContent } from '@/layouts/admin'
import AdminPostFormAdd from '@/page-components/admin/post/form-add'

const AdminPostEdit: React.FC = () => {
  const { query } = useRouter()
  const { loading: loadingPostDetail, data: dataPostDetail } =
    usePostDetailQuery({
      variables: {
        input: {
          id: +(query.id as string),
        },
      },
      skip: !query.id,
    })

  return (
    <LayoutAdmin>
      <LayoutAdminContent>
        {loadingPostDetail ? null : (
          <AdminPostFormAdd initialValues={dataPostDetail?.postDetail} />
        )}
      </LayoutAdminContent>
    </LayoutAdmin>
  )
}

export default AdminPostEdit
