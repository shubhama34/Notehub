import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwt_key = "shivam";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (email && password) {
            await connectToDB();

            let user = await User.findOne({ email });

            if (user) {
                const passwordIsCorrect = await bcrypt.compare(password, user.password);

                if (passwordIsCorrect) {
                    // Create a JWT token for the user
                    const token = jwt.sign({ user:user }, jwt_key);

                    return new Response(JSON.stringify({ user, auth: token }), { status: 200 });
                } else {
                    return new Response("Incorrect password", { status: 401 });
                }
            } else {
                return new Response("User not found", { status: 404 });
            }
        } else {
            return new Response("Email and password are required", { status: 400 });
        }
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}
