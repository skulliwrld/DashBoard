"use server"

import React from 'react'
import Image from 'next/image'
import { ProductUpdate } from '@/app/lib/actions'
// import { ProductUpdate } from '@/app/lib/actions'


function ProductUpdateForm({content}) {
    // const pathName = usePathname()
  return (
        <section className="w-full grid md:grid-cols-12 bg-[#0c162c]">
        <div className="col-span-4 mx-5 my-3  bg-[#182237] px-5 pt-5 pb-8 h-1/2 rounded-md">
            <Image src={content.image ||"/images/noproduct.png"}  width={250} height={40} className="rounded-md w-full"></Image>
            <h2 className="font-bold pt-6">welcome</h2>
        </div>

        <div className="col-span-8 bg-[#182237] text-sm px-3 md:px-0">
            <form className="flex flex-col py-4 px-5" action={ProductUpdate}>
                <input type="hidden" name="id" value={content._id} />
                <label className="font-bold my-1">Product Name</label>
                <input className ="bg-[#0c162c] w-full px-3 border border-slate-400 py-4" placeholder={content.title}  name="title" type="text" />

                <label className="font-bold my-1">Price</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3 py-4" placeholder={content.price} name="price" type="number" />

                <label className="font-bold my-1">Stock</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4" placeholder={content.stock} name="stock" type="number" />

                <label className="font-bold my-1">Color</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4"name="color"  placeholder={content.color}type="text"   />

                <label className="font-bold my-1">Description</label>
                <textarea col={20} row={10}  placeholder={content.description} name="description" className ="bg-[#0c162c]  border border-slate-400 w-full px-3 py-4" />
                
                <label className="font-bold my-1">Size</label>
                <select className="bg-[#0c162c] border border-slate-400 px-3 py-4 w-full" placeholder={content.size}  name="size" >
                    <option value="general">choose your size</option>
                    <option value="SM">SM </option>
                    <option value="MD">MD</option>
                    <option value="LG">LG </option>
                </select>

                <label className="font-bold my-1">Category</label>
                <select className="bg-[#0c162c] border border-slate-400 py-4  px-3 w-full"placeholder={content.category} name="category" >
                    <option value="general">Choose a Category</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Phone">Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Montor">Montor</option>
                </select>
                <button className="w-full font-bold bg-teal-600 py-3 mt-2">
                    submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default ProductUpdateForm