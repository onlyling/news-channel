import Link from 'next/link'
import React from 'react'

import type { ItemData } from '../interface'

const PortalListItem: React.FC<{ data: ItemData }> = ({ data }) => {
  return (
    <Link href={`/article/${data.id}`}>
      <h2>{data.title}</h2>
    </Link>
  )
}

export default PortalListItem
