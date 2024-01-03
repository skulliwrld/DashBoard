// "use client"
import { AddingProduct } from '@/app/lib/actions';
import React from 'react'
// import { useState } from 'react';

function Productform() {
    // const [file, setFile] = useState([])
    
  return (
    <div>
        <section className="bg-[#182237] mx-4">
        <form className="w-full mx-3 my-3 bg-[#182237] outline-none" action={AddingProduct}>
            <section className="w-full md:py-2">
            <div className="flex md:justify-between md:space-x-5 my-3 mx-3 flex-col md:flex-row gap-2 items-center md:items-start text-sm">

                <input type="text" placeholder='title' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mt-2 md:mt-0" name="title" />

                <select className="bg-[#0c162c] w-96 px-3 rounded-md py-4 " name="category">
                <option value="general">Choose a Category</option>
                <option value="Electronic">Electronic</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Montor">Montor</option>
                </select>

            </div>
            <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col md:flex-row items-center gap-2 text-sm">

                <input type="number" placeholder='price'className="bg-[#0c162c]  py-4 rounded-md px-3 w-96" name="price"/>

                <input type="number" placeholder='stock' name="stock" className="bg-[#0c162c] py-4 rounded-md px-3 w-96"/>
            </div>
            

            <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col mt-2 md:mt-0 items-center gap-2 md:flex-row text-sm">

                <input type="text"  placeholder='color' name="color" className="bg-[#0c162c]  py-4 rounded-md px-3 w-96"/>

                <select className="bg-[#0c162c] py-4 rounded-md px-3 w-96"  name="size">
                <option value="general">Choose Your Size </option>
                <option value="SM">SM </option>
                <option value="MD">MD</option>
                <option value="LG">LG </option>
                </select>

            </div>
            </section>
            
            {/* <div className="Profile Image">

               <input type="file" className="bg-[#0c162c] py-4 rounded-md px-3 my-3 mx-3 w-full" onChange={((e) =>{
                setFile(URL.createObjectURL(e.target.files[0]));
               })}/>

                <img src={file} alt="" width={100} height={50} className="mx-3 my-3" /> 

            </div> */}
            

            <div className="flex flex-col items-center justify-center md:mx-3">

            <textarea name="description" id="" rows="10" placeholder='desc' className="py-3 bg-[#0c162c] md:w-full px-3 md:mx-3 rounded-md mt-3 md:mt-0 w-96" />

            <button type="submit" className="md:w-full bg-teal-500 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black w-96 mt-3" >Submit</button>
            </div>
        </form>
        </section>

    </div>
  )
}

export default Productform