import { authentication } from '@/app/lib/actions'
import React from 'react'

function LoginForm() {
  return (
    <section className="md:px-10  bg-[#182237] md:py-16 rounded-md my-24 w-full">
        <h1 className=" md:pb-6 font-bold text-xl py-4 mx-6 text-center md:text-normal md:mx-0 md:text-3xl ">LOGIN</h1>
        <form className=" flex flex-col items-center justify-center" action={authentication}>
            <input type='text' placeholder='username' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mb-5" name="username" />
            <input type='password' placeholder='password' className="bg-[#0c162c] py-4 rounded-md px-3 w-96" name="password" />
            <button className="py-3 px-3 mt-3 w-96 bg-teal-600 text-white rounded-sm font-bold ">Login</button>
      </form>
      <p  className="text-sm mt-4 text-slate-300 mx-6 md:mx-0  ">Don't have an account yet... <a href='/' className="text-green-500"> Click Here</a></p>
    </section>
  )
}

export default LoginForm