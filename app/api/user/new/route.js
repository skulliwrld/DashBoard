import { connectToDB } from "@/utills/Database";
import User from "@/models/UserModel";
import bcrypt from "bcrypt"


export const POST = async (request) =>{
    // get request from our our frontend from our User Form
    const {username,email,isAdmin,isActive,password,phone, address} = await request.json();
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)
    try {
        await connectToDB();
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone_contact:phone,
            address,
            is_admin:isAdmin,
            is_active:isActive,   
        })

        await newUser.save()
        console.log("Data sent to database")

        return new Response(JSON.stringify(newUser),{
            status:200
        })
    } catch (error) {
        console.log(error)
    }

}