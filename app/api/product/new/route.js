import { connectToDB } from "@/utills/Database";
import {Product} from "@/models/ProductModel";


export async function POST(request){
        const  {title, stock , price,category, color , size , desc} = await request.json()

        try {
            await connectToDB()
            const newProduct = new Product({
                title,
                stock,
                category,
                size,
                description:desc,
                price,
                color,
            })

            await newProduct.save();

            return new Response(JSON.stringify(newProduct),{
                status:200
            })

        }catch (error) {
            console.log(error)
        }
}