import Image from 'next/image'
import Link from 'next/link'
import { deleteuser } from '@/app/lib/actions'

function UserTable({Datas}) {
  return (
    <div className="w-full h-full overflow-auto ">
        <table className=' md:px-2 md:mt-3 overflow-scroll w-full h-32'>
          <thead className="">
            <tr className="font-bold text-sm md:text-md w-full">
              <td className='pl-4'>Name</td>
              <td className="md:px-0 px-8">Email</td>
              <td className="md:px-0 px-2">Created_At</td>
              <td className="md:px-0 px-2">Role</td>
              <td className="md:px-0 px-2">Status</td>
              <td className="md:px-0 px-8">Action</td>
            </tr>
          </thead>
          <tbody>
              {Datas.map((data,index) =>(
                <tr className="items-center text-sm" key={index}>
                <td className="px-3 flex gap-2 py-3 items-center"><Image src={data.image|| "/images/avater.png"} width={35} height={20} alt="product" className="rounded-full"/>{data.username}</td>
                <td className='py-3 md:px-0 px-8'>{data.email}</td>
                <td className='py-3 px-2 md:px-0'>{data.createdAt?.toString()}</td>
                <td className='py-3 px-2 md:px-0'>{data.is_admin ?"Admin" : "Client"}</td>
                <td className='py-3 px-2 md:px-0'>{data.is_active ? "Active" : "Passive"}</td>
                <td className='py-3'>
                  <div className="flex space-x-2 items-center">
                    <Link href={`/dashboard/users/${data._id}`} className="bg-teal-600 px-2 rounded-sm font-">view</Link>
                    <form action={deleteuser}>
                      <input type="hidden" value={data._id} name="id" />
                      <button className="bg-red-600 px-2 rounded-sm font-">delete</button>
                    </form>
                   
                  </div>
               </td>
                </tr>

        
              ))}
  
          </tbody>
        </table>
    </div>
  )
}

export default UserTable