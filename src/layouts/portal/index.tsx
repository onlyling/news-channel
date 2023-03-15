import Link from 'next/link'
import React from 'react'

import { useCategoryListQuery } from '@/graphql/operations/__generated__/category.generated'

const LayoutPortal: React.FC<
  React.PropsWithChildren<{
    activedCategory?: number
  }>
> = ({ children, activedCategory }) => {
  const { data: dataCategoryList } = useCategoryListQuery()

  return (
    <div className="bg-[#fcfcfc] min-h-[100vh]">
      <div className="max-w-[1600px] mx-auto flex">
        <div className="w-[25%] h-[100vh] sticky top-0 z-10 flex-shrink-0 text-right pt-[20px] pb-[40x] flex flex-col">
          <Link
            href="/"
            className="pt-[30px] pr-[28px] pb-[30px] pl-[20px] block no-underline text-black text-[30px] portal-sider-link">
            News Channel
          </Link>

          <div className="flex-auto">
            {dataCategoryList?.categoryList.map(item => {
              return (
                <Link
                  key={item.value}
                  href={`/?c=${item.value}`}
                  className={[
                    'pt-[12px] pr-[28px] pb-[12px] pl-[20px] block no-underline text-black text-[16px] portal-sider-link',
                    activedCategory === item.value
                      ? 'portal-sider-link-active'
                      : undefined,
                  ]
                    .filter(Boolean)
                    .join(' ')}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="h-[32px] leading-[32px]">
            <Link
              href="/admin"
              className="no-underline pr-[28px] text-[12px] text-blue-200 hover:text-blue-400">
              管理后台
            </Link>
          </div>
        </div>
        <div className="w-[75%] min-h-[100vh] px-[20px] py-[20px] bg-white shadow-lg">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutPortal
