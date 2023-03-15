import { Spin } from 'antd'
import { useRouter } from 'next/router'
import React, { memo, useEffect, createContext, useContext } from 'react'

import { useMeQuery } from '@/graphql/operations/__generated__/user.generated'

export interface UserType {
  id?: number | null
  username?: string | null
}
export const UserContext = createContext<UserType>({})
export const useUserContext = () => useContext(UserContext)

const defaultUser: UserType = {}

const LayoutAdminUser: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data: dataMe, loading: loadingMe } = useMeQuery()
  const { replace } = useRouter()

  useEffect(() => {
    if (!loadingMe && dataMe?.me?.id === null) {
      replace('/admin')
    }
  }, [loadingMe, dataMe, replace])

  if (loadingMe || typeof dataMe?.me?.id !== 'number') {
    return <Spin />
  }

  return (
    <UserContext.Provider value={dataMe?.me ?? defaultUser}>
      {children}
    </UserContext.Provider>
  )
}

export default memo(LayoutAdminUser)
