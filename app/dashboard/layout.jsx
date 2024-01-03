import React from 'react'
import SideBar from '@/components/ui/dashboard/SideBar'
import NavBar from '@/components/ui/dashboard/NavBar'
import Footer from '@/components/ui/dashboard/Footer'

function layout({children}) {
  return (
    <div className='md:grid md:grid-cols-12'>
        <div className=" md:col-span-3 bg-[#182237] p-5">
          <SideBar />  
        </div>
        <div className='md:col-span-9'>
            <NavBar />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default layout