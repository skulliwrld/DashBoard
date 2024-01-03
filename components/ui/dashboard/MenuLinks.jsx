"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MenuLinks({items}) {

  const pathName = usePathname()
  return (
    <div>
        <Link href={items.path} className={`flex font-normal space-x-3 text:sm py-1 items-center hover:bg-slate-900 ${pathName === items.path && 'bg-slate-600 rounded-lg '}`}>
            <i className="text-sm pl-1">{items.icons}</i>
            <span className="text-xs"> {items.title}</span>
        </Link>
    </div>
  )
}

export default MenuLinks