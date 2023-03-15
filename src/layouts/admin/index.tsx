import ApiOutlined from '@ant-design/icons/ApiOutlined'
import { Layout } from 'antd'
import Link from 'next/link'
import { memo } from 'react'

import SiderMenu from './sider-menu'
import User from './user'

export { useUserContext } from './user'
export { default as LayoutAdminContent } from './content'

const { Content, Sider } = Layout

const LayoutAdmin: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <User>
      <Layout className="h-[100vh] overflow-hidden">
        <Sider>
          <div className="h-[100%] flex flex-col">
            <div className="w-[180px] h-[32px] bg-white mx-auto my-auto mt-[8px] mb-[8px] rounded-[2px] text-center leading-[32px] text-blue-600">
              News Channel
            </div>

            <SiderMenu />

            <div className="h-[32px] leading-[32px] bg-white flex justify-center">
              <Link href="/">
                <ApiOutlined /> 返回首页
              </Link>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content className="h-[100%] overflow-y-auto">{children}</Content>
        </Layout>
      </Layout>
    </User>
  )
}

export default memo(LayoutAdmin)
