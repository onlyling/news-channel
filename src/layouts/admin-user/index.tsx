import { Spin } from 'antd'
import React, { memo } from 'react'

import { useMeQuery } from '@/graphql/operations/__generated__/user.generated'

const LayoutAdminUser: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data: dataMe, loading: loadingMe } = useMeQuery()

  console.log(dataMe)

  if (loadingMe) {
    return <Spin />
  }

  return children as React.ReactElement
}

export default memo(LayoutAdminUser)
