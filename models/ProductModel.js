import {Schema , model, models} from "mongoose"

const ProductSchema = new Schema({
    title:{
        type:String,
    },

    size:{
        type:String,
    },

    price:{
        type:String,
    
    },

    stock:{
        type:String,
       
    },
    color:{
        type:String,
    },

    image:{
        type:String
    },

    description:{
        type:String,
    },

    category:{
        type:String,
    }
},{timestamps:true});

export const Product = models.Product || model("Product", ProductSchema)

