import Link from 'next/link'
import React from 'react'

import { formatUpdatedAt } from '@/libs/day'

import type { ItemData } from '../interface'

const PortalListItem: React.FC<{ data: ItemData }> = ({ data }) => {
  return (
    <div className="px-[32px] hover:bg-zinc-50 mobile:px-[8px]">
      <Link
        href={`/article/${data.id}`}
        className="block no-underline text-black py-[16px] border-0 border-b-[1px] border-b-zinc-100 border-solid mobile:py-[8px]">
        <h2 className="text-[30px] mb-[16px] mobile:text-[16px] mobile:mb-[8px]">
          {data.title}
        </h2>

        <p className="leading-[22px] text-[14px] mobile:leading-[18px] mobile:text-[12px]">
          {data.intro}
        </p>

        <div className="text-[14px] mobile:text-[12px]">
          {formatUpdatedAt(data.updatedAt)}
        </div>
      </Link>
    </div>
  )
}

export default PortalListItem
