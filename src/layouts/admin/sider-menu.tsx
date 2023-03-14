import { HomeOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import React, { memo, useCallback, useMemo } from 'react'

const items: MenuProps['items'] = [
  {
    key: '/admin/home',
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    key: '/admin/category',
    label: '分类管理',
    icon: <HomeOutlined />,
  },
  {
    key: '/admin/post',
    label: '文章管理',
    icon: <HomeOutlined />,
  },
]

const SiderMenu: React.FC = () => {
  const { pathname, push } = useRouter()

  const selectedKeys = useMemo(
    () =>
      items
        .filter(item => new RegExp(`^${item?.key}`).test(pathname))
        .map(item => item?.key as string),
    [pathname],
  )

  const onClick = useCallback<Required<MenuProps>['onClick']>(
    ({ key }) => {
      console.log('key => ', key)
      push(key)
    },
    [push],
  )

  return (
    <Menu
      mode="inline"
      theme="dark"
      items={items}
      selectedKeys={selectedKeys}
      onClick={onClick}
    />
  )
}

export default memo(SiderMenu)
