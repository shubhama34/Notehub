import mongoose from "mongoose";

let isConnected =false;
let url ="mongodb+srv://shivam:V6NsnTWvrQA737ij@shivam.e6xu6uz.mongodb.net/?retryWrites=true&w=majority&appName=Shivam"
export const connectToDB=async()=>{
   
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log("mongoDb is connected")
        return
    }
    else{
       
        try {
         mongoose.connect(url,{
                dbName:"notehub"
            })
            .then(()=>{
                console.log("conntecd")
            })
           
        } catch (error) {
            
        }
    }
}