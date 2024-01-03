import { connectToDB } from "@/utills/Database";
import User from "@/models/UserModel";

export async function GET(request){
    try {
        await connectToDB();

        const users = await User.find({}).populate("_id")

        return new Response(JSON.stringify(users),{
            status:200
        })
    } catch (error) {
        return new Response("there was an issues when trying to get data from DB",{status:500})  
    }
    
}