import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwt_key = "shivam";

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

        // const userExists = await User.findOne({ username: username });
      
        // if (userExists) {
        //     return new Response("User already exists", { status: 400 });
        // } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt);

            let user = await User.create({
                username: username,
                email: email,
                password: hashedPass
            });

            // Create a JWT token for the user
            const token = jwt.sign({ id: user._id }, jwt_key);
            
            return new Response(JSON.stringify({ user, auth: token }), { status: 201 });
        // }
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
