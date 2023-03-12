import { useMemo } from 'react'
import type { UseBoundStore, StoreApi } from 'zustand'
import { create } from 'zustand'

export interface InitialState {
  user?: {
    id: number
    username: string
  }
}

export type StoreType = UseBoundStore<StoreApi<InitialState>> | undefined

let store: StoreType

const initialState: InitialState = {
  user: undefined,
}

function initStore(preloadedState = initialState) {
  return create(() => ({
    ...initialState,
    ...preloadedState,
  }))
}

export const initializeStore = (preloadedState: InitialState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useHydrate(_initialState: InitialState) {
  const state =
    typeof _initialState === 'string'
      ? JSON.parse(_initialState)
      : _initialState
  const _store = useMemo(() => initializeStore(state), [state])
  return _store
}
