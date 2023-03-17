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
    <div className="bg-[#fcfcfc] min-h-[100vh] portal-wrapper">
      <div className="max-w-[1600px] mx-auto flex mobile:block">
        <div className="w-[25%] h-[100vh] sticky top-0 z-10 flex-shrink-0 text-right pt-[20px] pb-[40x] flex flex-col mobile:h-[40px] mobile:py-0 mobile:flex-row mobile:w-[100%] mobile:bg-blue-600 mobile:items-center mobile:px-[8px] mobile:justify-between">
          <Link
            href="/"
            className="pt-[30px] pr-[28px] pb-[30px] pl-[20px] block no-underline text-black text-[30px] portal-sider-link mobile:px-[8px] mobile:py-[4px] mobile:text-[16px] mobile:bg-white mobile:inline mobile:rounded-[2px]">
            News Channel
          </Link>

          <div className="flex-auto mobile:flex mobile:justify-end mobile:max-w-[60%] mobile:overflow-x-auto mobile:overflow-y-hidden">
            {dataCategoryList?.categoryList.map(item => {
              return (
                <Link
                  key={item.value}
                  href={`/category/${item.value}`}
                  className={[
                    'pt-[12px] pr-[28px] pb-[12px] pl-[20px] block no-underline text-black text-[16px] portal-sider-link mobile:px-[4px] mobile:py-[2px] mobile:mx-[4px] mobile:rounded-[2px] mobile:bg-blue-50 mobile:text-[12px]',
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

          <div className="h-[32px] leading-[32px] mobile:hidden">
            <Link
              href="/admin"
              className="no-underline pr-[28px] text-[12px] text-blue-200 hover:text-blue-400">
              管理后台
            </Link>
          </div>
        </div>
        <div className="w-[75%] min-h-[100vh] py-[16px] bg-white shadow-lg mobile:h-auto mobile:w-[100%] mobile:py-[4px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutPortal
