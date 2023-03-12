import React, { createContext, useContext } from 'react'

import type { StoreType } from '.'

export const StoreContext = createContext<StoreType>(undefined)

export const StoreProvider = ({
  children,
  store,
}: React.PropsWithChildren<{
  store: any
}>) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (selector, eqFn) => {
  const store = useContext(StoreContext)
  const values = store?.(selector, eqFn)

  return values
}
