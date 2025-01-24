import Pdf from "@/models/pdf";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {
        const { userId } = await req.json();
     
        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

        // Fetch users by IDs
        let users = await User.find({ _id: { $in: userId } });
        let person=users[0]
        let pdf_list = await Pdf.find({ publisherId :{$in:userId}})
        person={...person,pdfs:pdf_list}

        return new Response(JSON.stringify(person), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}



