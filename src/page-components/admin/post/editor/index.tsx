import dynamic from 'next/dynamic'
import React, { memo } from 'react'
import type { ReactQuillProps } from 'react-quill'

import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const AdminPostEditor: React.FC<ReactQuillProps> = props => {
  return <ReactQuill theme="snow" {...props} />
}

export default memo(AdminPostEditor)
