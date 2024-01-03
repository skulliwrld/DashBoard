import { connectToDB } from "@/utills/Database";
import {Product} from "@/models/ProductModel";

export async function GET(request){
    try {
        await connectToDB();

        const product = await Product.find({}).populate("_id")

        return new Response(JSON.stringify(product),{
            status:200
        })
    } catch (error) {
        return new Response("there was an issues when trying to get data from DB",{status:500})  
    }
    
}