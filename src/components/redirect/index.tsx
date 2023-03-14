import { useRouter } from 'next/router'
import type React from 'react'
import { useEffect } from 'react'

const Redirect: React.FC<{
  href: string
  replace?: boolean
}> = ({ href, replace: _replace }) => {
  const { push, replace } = useRouter()

  useEffect(() => {
    if (_replace) {
      replace(href)
    } else {
      push(href)
    }
  }, [_replace, href, push, replace])

  return null
}

export default Redirect
