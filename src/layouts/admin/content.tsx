import React, { memo } from 'react'

const LayoutAdminContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="m-[12px]">{children}</div>
}

export default memo(LayoutAdminContent)
