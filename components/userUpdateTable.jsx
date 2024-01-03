import { UserUpdate } from "@/app/lib/actions"
import Image from "next/image"
export const UpdateUserForm = ({content:user}) =>{

    return (
        <section className="w-full grid md:grid-cols-12 bg-[#0c162c]">
        <div className="col-span-4 mx-5 my-3  bg-[#182237] px-5 pt-5 pb-8 h-1/2 rounded-md">
            <Image src={user.image || "/images/avater.png"}  width={250} height={40} className="rounded-md  w-full h-full"></Image>
            <h2 className="mt-1">Hello {user.username}</h2>
        </div>

        <div className="col-span-8 bg-[#182237] text-sm px-3 md:px-0">
            <form className="flex flex-col py-4 px-5" action={UserUpdate}>
                <input type="hidden" name="id" value={user._id} />
                <label className="font-bold my-1">Username</label>
                <input name="username"className ="bg-[#0c162c] w-full px-3 border border-slate-400 py-4" type="text" placeholder={user.username}  />

                <label className="font-bold my-1">Email</label>
                <input name="email" className ="bg-[#0c162c] border border-slate-400 w-full px-3 py-4" type="text" placeholder={user.email} />

                <label className="font-bold my-1">Password</label>
                <input name="password"className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4" type="text" placeholder={user.password}/>

                <label className="font-bold my-1">Phone</label>
                <input name="phone" className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4" type="text" placeholder={user.phon}/>

                <label className="font-bold my-1">Address</label>
                <textarea col={20} row={10} name="address" className ="bg-[#0c162c] border border-slate-400 w-full px-3 py-4" placeholder={user.address} />
                
                <label className="font-bold my-1">Is Admin</label>
                <select className="bg-[#0c162c] border border-slate-400 px-3 py-4 w-full" placeholder ={user.is_admin.toString()}name="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <label className="font-bold my-1">Is Active</label>
                <select name="isActive" className="bg-[#0c162c] border  border-slate-400 py-4  px-3 w-full" placeholder ={user.is_active.toString()}>
                    <option value={true}>Yes </option>
                    <option value={false}>No</option>
                </select>
                <button className="w-full font-bold bg-teal-600 py-3 mt-2">
                    update
                </button>
            </form>
        </div>
    </section>
    )
} 