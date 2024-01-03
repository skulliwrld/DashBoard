"use server"
import { Product } from "@/models/ProductModel";
import { connectToDB } from "@/utills/Database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "@/models/UserModel";
import bcrypt from "bcrypt"
import { signIn } from "../auth";


// //POSTING DATAS TO OUR PRODUCT AND USER DATABASE
export const AddingProduct = async (FormData) =>{
    const {title, price, stock, description,color,size,category} = Object.fromEntries(FormData.entries())
    try {
        connectToDB()
        const NewProduct = new Product({
            title,
            price,
            stock,
            description,
            color,
            size,
            category
        })

        await NewProduct.save()
        if(NewProduct.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
  
 }

 export const AddingUser = async (FormData) =>{
    const {username,password,email,address,isAdmin,isActive,phone} = Object.fromEntries(FormData.entries())
    //HASHING PASSWORD
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    try {
        connectToDB()
        const NewUser = new User({
            username,
            password:hashedPassword,
            email,
            address,
            isAdmin,
            isActive,
            phone
        })

        await NewUser.save()
        if(!NewUser.ok){
            console.log("there was an issue when trying to add new users")
        } 
    } catch (error) {
        console.log(error)   
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")

}

// DELETING PRODUCT AND USER FUNCTION
export const deleteproduct = async (FormData) =>{

    const {id} = Object.fromEntries(FormData);
    try {
        connectToDB();
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Delete Product")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}


export const deleteuser = async (FormData) =>{
    
    const {id} = Object.fromEntries(FormData);
    try {
        connectToDB();
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Delete Product")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}


// UPDATING OUR PRODUCT FIELDS
export const ProductUpdate = async (FormData) =>{

    const  {id, title , price, category, stock,color, size, description} = Object.fromEntries(FormData)

    try {
        connectToDB()
        const updateProductFieds = {
            title , price, category, stock,color, size, description
        }

        Object.keys(updateProductFieds).forEach((key) =>(updateProductFieds[key] === "" || undefined) && delete updateProductFieds[key]);

        await Product.findByIdAndUpdate(id,updateProductFieds)

    } catch (error) {
        console.log(error)
        
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}


export const UserUpdate = async (FormData) =>{
    const  {id, username , email, password, isAdmin,isActive, phone, address} = Object.fromEntries(FormData)

    try {
        connectToDB()
        const updateUserFieds = {
            username,email,password,isAdmin,isActive, phone, address
        }

        Object.keys(updateUserFieds).forEach((key) =>(updateUserFieds[key] === "" || undefined) && delete updateUserFieds[key]);

        await User.findByIdAndUpdate(id,updateUserFieds)
        

    } catch (error) {
        console.log(error)
        
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}


// AUTHENTICATIONS ACTION
export const authentication = async (formData) => {
    const {username, password} = Object.fromEntries(formData)
    try {
        await signIn("credentials",{username, password})
    } catch (error) {
        console.log(error.message)
    }

    
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

// SIGN UP ACTION
export const SignUp = async (formData) =>{
    const {username, password, isAdmin, email } = Object.fromEntries(formData)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    try {
        connectToDB()
        const NewUser = new User({
            username,
            password:hashedPassword,
            email,
            isAdmin
        })

        await NewUser.save()
        if(!NewUser.ok){
            console.log("there was an issue when trying to add new users")
        } 
        
    } catch (error) {
        console.log(error)
        
    }

    revalidatePath("/login")
    redirect("/login")
} 