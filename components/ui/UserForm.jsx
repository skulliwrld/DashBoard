import { AddingUser } from '@/app/lib/actions'
import React from 'react'

function UserForm() {
  return (
    <section className="bg-[#182237] mx-4">
      <form className="w-full mx-3 my-3 bg-[#182237] outline-none" action={AddingUser}>
        <section className="w-full md:py-2">
          <div className="flex md:justify-between md:space-x-5 my-3 mx-3 flex-col md:flex-row gap-2 items-center md:items-start text-sm">

            <input type="text" name="username" placeholder='username' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mt-2 md:mt-0" />

            <input type="email" placeholder='email' name="email" className="bg-[#0c162c]  py-4 rounded-md px-3 w-96"/>
          </div>

          
          <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col md:flex-row items-center gap-2 text-sm">

          <input type="password" name="password" placeholder='password' className="bg-[#0c162c] py-4 rounded-md px-3 w-96" />
          
          <input type="text" name="phone" placeholder='phone'  className="bg-[#0c162c]  py-4 rounded-md px-3 w-96"/>
          </div>
      
          <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col mt-2 md:mt-0 items-center gap-2 md:flex-row text-sm">
            <select className="bg-[#0c162c] w-96 px-3 rounded-md py-4" name="isActive" id="isActive">
              <option value={false}>Is Active</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
              <select className="bg-[#0c162c] py-4 rounded-md px-3 w-96 " name="isAdmin">
                <option value={false}>Is Admin </option>
                <option value={true}>Yes </option>
                <option value={false}>No</option>
              </select>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center md:mx-3">
          <textarea name="address" id="" rows="10" placeholder='address' className="py-3 bg-[#0c162c] md:w-full px-3 md:mx-3 rounded-md mt-3 md:mt-0 w-96"/>

          <button type="submit" className="md:w-full bg-teal-500 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black w-96 mt-3" >Submit</button>
        </div>
        
      </form>
    </section>
  )
}

export default UserForm