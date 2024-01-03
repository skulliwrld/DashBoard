import {Schema , model, models} from "mongoose"

const UserSchema =new  Schema({
    username:{
        type:String,
   
    },

    email:{
        type:String,
        
    },

    password:{
        type:String,
    },
    phone_contact:{
        type:String,
    },

    image:{
        type:String
    },

    is_admin:{
        type:Boolean,
        default:false
    },

    is_active:{
        type:Boolean,
        default:true
    },

    address:{
        type:String
    },

},{timestamps:true})

const User = models.User || model("User",UserSchema);
export default User;