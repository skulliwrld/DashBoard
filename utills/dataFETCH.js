"use server"
import { connectToDB } from "./Database"
import { Product } from "@/models/ProductModel"
import User from "@/models/UserModel";



// FETCHINF ALL USERS AND PRODUCTS
export const fetchUser = async (q,page) =>{

    const USER_PAR_PAGE = 5

    const regex = new RegExp(q,"i")
    try{
        await connectToDB();
        const count= await User.find({username:{$regex:regex}}).count()
        const users =  await User.find({username:{$regex:regex}}).limit(USER_PAR_PAGE).skip(USER_PAR_PAGE * (page -1));
        return {users,count}
    }catch(error){
        console.log(error)
    }
}


export const fetchProduct = async (q,page) =>{
    const regex = new RegExp(q,"i")
    const ITEMS_PAR_PAGE = 5
    try{
        await connectToDB();
        const count = await Product.find({title:{$regex:regex}}).count()
        const products =  await Product.find({title:{$regex:regex}}).limit(ITEMS_PAR_PAGE).skip(ITEMS_PAR_PAGE * (page-1))
        return {products, count}
    }catch(error){
        console.log(error)
    }
}

// FETCHINF INDIVIDUAL USER AND PRODUCT
export const fetchUserData = async (id) =>{
    try {
        await connectToDB()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)   
    }
}

export const fetchProductData = async (id) =>{
    try {
        await connectToDB()
        const product = await Product.findById(id)
        return product
    } catch (error) {
        console.log(error)   
    }
}


