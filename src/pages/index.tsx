import Link from 'next/link'
import React from 'react'

const Index: React.FC = () => {
  return (
    <>
      <div>第一个页面</div>
      <Link href="/admin">管理后台</Link>
    </>
  )
}

export default Index
