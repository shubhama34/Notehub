import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {
      
        const { userId, publisherId,status} =await  req.json()
      

        // Validate the input
        if (!userId || !publisherId) {
            return new Response("User ID and Publisher ID are required", { status: 400 });
        }

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }
        let user;
        if(status=="follow"){
             user = await User.findByIdAndUpdate(
                userId,
                { $addToSet: { favourite_publishers: publisherId } }, // Using $addToSet to avoid duplicates
                { new: true } // Return the updated document
            );

            if (!user) {
                return new Response("User not found", { status: 404 });
            }
        }
        else{
            user = await User.findByIdAndUpdate(
                userId,
                { $pull: { favourite_publishers: publisherId } }, // Using $pull to remove the publisher ID
                { new: true } // Return the updated document
            );
            if (!user) {
                return new Response("User not found", { status: 404 });
            }
        }
        // Find the user and update the favourite_publishers list
       

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}