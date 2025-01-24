
import { Schema, model, models } from "mongoose";


const UserSchema=new Schema({
    username:{
        type:String,    
    },
    email:{   
        type: String,
      
        required: [true, "email required"]
    },
    password:{
        type:String
    },
    favourite_publishers:{
        type:[String],
        default:[]
    },
    favourite_pdf:{
        type: [String],
        default: []
    },
    imgUrl:{
        type:String,
        default:"https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg"
    }
});

const User=models.User|| model("User",UserSchema);
export default User
