"use client"
import React,{useState} from 'react'
import { MdOutlineChat,MdPublic,MdSearch, MdNotifications } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { FaBars,FaTimes  } from "react-icons/fa";




function NavBar() {
  const pathName = usePathname()

  const [click , setClick] = useState(false)

  const handleTagChange =() =>{
    setClick(!click)
  }

  return (
    // DESKTOP VIEW
    <>
    <nav className="main hidden md:flex md:justify-between  md:items-center md:py-2 bg-[#182237] md:px-2 md:mt-2 md:mx-2">
        <div className='title text-white text-xs font-bold'>
          {pathName.split("/").pop()}
        </div>
        <div className="menuField flex justify-between gap-2">
          <div className="search flex bg-slate-800 items-center py-1 px-2 rounded-lg w-3/4 ">
            <MdSearch />
            <input type="text" placeholder='search.....' className='ml-1 bg-inherit w-3/4 outline-none text-xs' />
          </div>
          <div className='icons flex items-center space-x-2 cursor-pointer'>
            <i><MdNotifications width={20} /></i>
            <i><MdOutlineChat width={20}/></i>
            <i><MdPublic width={20}/></i>
          </div>
      </div>   
    </nav>

    <nav className="md:hidden flex w-full my-4 items-center relative">
      <div className="px-3" onClick={handleTagChange}>
        {click ? <FaTimes/> : <FaBars/>}
      </div>
      
        {click ? (
          <div className="flex justify-between flex-col items-center py-2 ml-5 bg-[#182237] px-4 mt-2">
          <div className='title text-white text-xl font-bold pb-2'>
          {pathName.split("/").pop()}
        </div>
        <div className="menuField flex justify-between gap-2">
          <div className="search flex bg-slate-800 items-center py-1 px-2 rounded-lg w-3/4 ">
            <MdSearch />
            <input type="text" placeholder='search.....' className='ml-1 bg-inherit w-3/4 outline-none text-xs' />
          </div>
          <div className='icons flex items-center space-x-2 cursor-pointer'>
            <i><MdNotifications width={20} /></i>
            <i><MdOutlineChat width={20}/></i>
            <i><MdPublic width={20}/></i>
          </div>
      </div>   
          </div>
        ) : null}

  
     
    </nav>
    </>
    
  
  )
}

export default NavBar