import FieldTimeOutlined from '@ant-design/icons/FieldTimeOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import { useRouter } from 'next/router'
import React from 'react'

import { usePostPublishedDetailQuery } from '@/graphql/operations/__generated__/post.generated'
import LayoutPortal from '@/layouts/portal'
import { formatUpdatedAt } from '@/libs/day'

const Index: React.FC = () => {
  const { query } = useRouter()
  const { loading: loadingPostPublishedDetail, data: dataPostPublishedDetail } =
    usePostPublishedDetailQuery({
      variables: {
        input: {
          id: +(query.id as string),
        },
      },
      skip: !query.id,
    })

  const post = dataPostPublishedDetail?.postPublishedDetail

  return (
    <LayoutPortal activedCategory={post?.categoryId}>
      {loadingPostPublishedDetail ? null : (
        <div className="px-[32px]">
          <h1 className="pt-[32px]">{post?.title}</h1>

          <p>
            <span className="mr-4">
              <FieldTimeOutlined className="mr-1 text-neutral-500" />
              {formatUpdatedAt(post?.updatedAt || '')}
            </span>

            <span>
              <UserOutlined className="mr-1 text-neutral-500" />
              {post?.author}
            </span>
          </p>

          <p className="py-[12px] bg-blue-100 pl-[32px] border-solid border-0 border-l-[4px] border-l-blue-400 text-blue-400">
            {post?.intro}
          </p>

          <article
            className="text-[#000]"
            dangerouslySetInnerHTML={{
              __html: post?.content || '',
            }}
          />
        </div>
      )}
    </LayoutPortal>
  )
}

export default Index
