
import { SignUp } from '@/app/lib/actions'
import React from 'react'

function SignUPForm() {
  return (
    <section className="md:px-10  bg-[#182237] md:py-16 rounded-md my-24 w-full">
        <h1 className=" md:pb-6 font-bold text-xl py-4 mx-6 text-center md:text-normal md:mx-0 md:text-3xl ">Sign Up</h1>
        <form className=" flex flex-col items-center justify-center md:mx-0 px-6" action={SignUp}>
            <input type='text' placeholder='username' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mb-5 text-sm" name="username" required />
            <input type='password' placeholder='password' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 text-sm" name="password" required/>
            <input type="email" placeholder='email' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 my-4 text-sm" name="email" required />
            
            <select className="bg-[#0c162c] py-4 rounded-md px-3 w-96 text-sm text-slate-500 " name="isAdmin">
                <option value={false}>Is Admin </option>
                <option value={true}>Yes </option>
                <option value={false}>No</option>
            </select>

            <button className="py-3 px-3 mt-3 w-96 bg-teal-600 text-white rounded-sm font-bold ">sign up</button>
      </form>
      <p className="text-sm mt-4 text-slate-300 mx-6 md:mx-0  ">Already Have An Account... <a href='/login' className="text-green-500 "> Click Here</a></p>
    </section>
  )
}

export default SignUPForm