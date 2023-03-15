import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import LayoutPortal from '@/layouts/portal'

const Index: React.FC = () => {
  const { query } = useRouter()

  return (
    <LayoutPortal activedCategory={query.c ? +query.c : undefined}>
      <div>第一个页面</div>
    </LayoutPortal>
  )
}

export default Index
