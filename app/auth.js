import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
// import credentials from "next-auth/providers/credentials"
import { authConfig } from "@/app/authconfig"
import { connectToDB } from "@/utills/Database"
import User from "@/models/UserModel"
import bcrypt from "bcrypt"


const login = async (credentials) =>{
    try {
        connectToDB();
        const user = await User.findOne({username:credentials.username})
        if(!user) throw new Error("wrong credentials for username")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if(!isPasswordCorrect) throw new Error("wrong credentials--password")

        return user;
    } catch (error) {
        console.log(error, "No data returned")
    }
}


export const {signIn,signOut,auth} = NextAuth({
    ...authConfig,
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user;
                    
                } catch (error) {
                    return null;
                }


            }
        })
    ],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.username = user.username
                token.image = user.image;
                token.is_admin= user.is_admin
            }
            return token    
        },

        async session({session, token}){
            if(token){
                session.user.username = token.username
                session.user.image = token.image
                session.user.is_admin = token.is_admin

            }
            return session    
        }
        
    }
})
