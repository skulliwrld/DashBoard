"use client"
import React from 'react'
import {MdSearch} from "react-icons/md"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'


function SearchAddComponent({title,url}) {
  //SEARCH  DATA PARAMS CONFIG
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const pathName= usePathname();
 
  const handleSearch = useDebouncedCallback((e) =>{
    
  const params = new URLSearchParams(searchParams)

    params.set("page")

  if(e.target.value){
    e.target.value.length > 2 && params.set("q", e.target.value)
  }else{
    params.delete("q")
  }
  replace(`${pathName}?${params}`)
  })

  return (
    <section className="flex justify-between items-center px-3 py-2">
      <div className=" bg-slate-500 rounded-lg flex items-center gap-2 px-3 py-2">
          <MdSearch className="font-bold text-white"/>
          <input type="text" placeholder={`search for a ${title}`} onChange={handleSearch} className="bg-slate-500 w-full h-full text-sm outline-none"/>
      </div>
      <Link href={url} className="px-2 py-2 text-white bg-purple-800 hover:bg-black text-sm font-bold rounded-md">
        Add {title}
      </Link>
        
    </section>
  )
}

export default SearchAddComponent


