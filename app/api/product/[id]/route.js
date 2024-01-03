import { connectToDB } from "@/utills/Database";
import { Product } from "@/models/ProductModel";
// GET(read)
export async function GET(request, {params}){
    try {
        await connectToDB();

        const products = await Product.findById(params.id).populate('_id')
        if(!products){
            return new Response("Prompt not found",{status:500})
        }

        return new Response(JSON.stringify(products),{status:200})

    } catch (error) {
        return new Response("there was an issues when trying to get data from DB",{status:500})        
    }
}


//PATCH(update)
export async function PATCH(request, {params}){
    const {title ,price , stock, description,size, category,color} = await request.json()
    try {
        await connectToDB();

        const existingProduct = await Product.findById(params.id)

        if(!existingProduct){
            return new Response("Prompt not found")
        }
        existingProduct.title = title;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.description = description;
        existingProduct.size = size;
        existingProduct.category = category;
        existingProduct.color = color;

        await existingProduct.save()
    
        return new Response(JSON.stringify(existingProduct), {status:200})
    } catch (error) {
        return new Response('failed to be update prompt',error, {status:500})
    }
}

// // deleting post (DELETE)
// export const DELETE = async (request, { params }) => {
//     try {
//         await connectToDB();

//         // Find the prompt by ID and remove it
//         await PromptData.findByIdAndRemove(params.id);

//         return new Response("Prompt deleted successfully", { status: 200 });
//     } catch (error) {
//         return new Response("Error deleting prompt", { status: 500 });
//     }
// };