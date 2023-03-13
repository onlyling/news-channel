import { Layout } from 'antd'
import { memo } from 'react'

import SiderMenu from './sider-menu'
import User from './user'

export { useUserContext } from './user'
export { default as LayoutAdminContent } from './content'

const { Content, Sider } = Layout

const LayoutAdmin: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <User>
      <Layout className="h-[100vh]">
        <Sider>
          <div className="w-[180px] h-[32px] bg-white mx-auto my-auto mt-[8px] mb-[8px] rounded-[2px] text-center leading-[32px] text-blue-600">
            News Channel
          </div>

          <SiderMenu />
        </Sider>
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </User>
  )
}

export default memo(LayoutAdmin)
