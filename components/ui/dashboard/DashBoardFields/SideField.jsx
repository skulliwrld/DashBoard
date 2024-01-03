import React from 'react'
import Link from 'next/link'
import { FaPlayCircle } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";


function SideField() {
  return (
    <section className="flex flex-col items-center justify-center py-3 mx-4 md:mx-0">
      <div className="px-4 py-2 bg-[url('/images/rocket.png')] bg-no-repeat bg-cover rounded-lg">
        <h2 className="font-bold pb-5"> 🚀 Available Now</h2>
        <h3 className="font-bold text-justify text-xl pb-5"> How to use the new version of ADMIN Dashboard ?</h3>
        <p className="text-sm text-[#ADB7BE] pb-3">Take 4 mininte to learn</p>
        <p className="text-white backdrop:bg text-sm pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa ducimus nihil hic aliquid ipsam modi. Assumenda quis, laudantium minima quisquam dolorum, veritatis deleniti voluptates ipsum ipsam asperiores explicabo fugit.
        </p>

        <Link href="/" className="bg-purple-400 flex items-center gap-1 py-1 px-2 flex--wrap justify-center rounded-lg hover:bg-slate-600">
          <i><FaPlayCircle /></i>
          watch
        </Link>
      </div>

      <div className="px-4 py-2 bg-[#0c162c] mt-2 rounded-lg">
        <h2 className="font-bold pb-5">🌟coming soon</h2>
         
        <h1 className="font-bold text-justify text-xl pb-5">New server action are avaliable, partial pre-rendering is coming up! 
        </h1>

        <p className="text-sm text-[#ADB7BE] pb-3">
          Boost your productivity
        </p>

        <p className="text-[#8c9fac] text-sm pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolor vel quis nisi explicabo labore doloribus similique, cum rem porro omnis perspiciatis aliquam asperiores quod nulla facilis eum cupiditate. Animi.</p>

        <Link href="/" className="bg-purple-400 flex items-center gap-1 py-1 px-2 flex--wrap justify-center rounded-lg hover:bg-slate-600">
          <i><SiSololearn /></i>
          Learn
        </Link> 
      </div>
    </section>
  )
}

export default SideField