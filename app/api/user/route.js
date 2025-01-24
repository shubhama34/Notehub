import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {
        const { userIds } = await req.json();

        // Validate the input
        if (!userIds || !Array.isArray(userIds)) {
            return new Response("Invalid request body", { status: 400 });
        }

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

        // Fetch users by IDs
        const users = await User.find({ _id: { $in: userIds } });

        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
