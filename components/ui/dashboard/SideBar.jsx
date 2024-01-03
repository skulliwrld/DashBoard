import React from 'react'
import { MenuData } from '@/components/Data'
import MenuLinks from './MenuLinks'
import Image from 'next/image'
import { auth, signOut } from '@/app/auth'
import { MdLogout } from 'react-icons/md'

async function SideBar() {
  const {user} = await auth()
  return (
    <div className=" flex flex-col items-start">
      <div className="flex items-center gap-3 mb-2">
        <Image src={user.image || "/images/avater.png"} width={50} height={120} className='rounded-md'/>
        <div className="flex flex-col p-0 text-sm">
          <span className="text-lg text-slate-100">{user.username}</span>
          <span className='text-xs '>{user.is_admin ? "Admin" : "Client"}</span>
          <span>{user.email}</span>
        </div>
      </div>
      <ul className="w-full">
        {MenuData.map((cat) =>(
          <li className='text-lg font-semibold'key={cat.title}>{cat.title}
          <span>
            {cat.list.map((data) =>(
              <MenuLinks items={data} key={data.title} />
            ))}
          </span>
          </li> 
      ))}
      </ul>
      <form action={ async ()=>{
        "use server"
        await signOut()
      }}>
        <button className="flex text-xs ml-1 gap-4">
        <MdLogout />
        Logout
      </button>
      </form>
      
      
    </div>
  )
}

export default SideBar