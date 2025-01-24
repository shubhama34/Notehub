import Pdf from "@/models/pdf";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {
        const { stream, course, university, semester, subject }=await req.json()

        // Validate the input
        if (!stream || !course || !university || !semester || !subject) {
            return new Response("All query parameters are required", { status: 400 });
        }

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

        // Fetch PDFs by criteria and sort them by the size of likes array
        const pdfs = await Pdf.find({
            stream,
            course,
            university,
            semester,
            subject
        }).sort({ likes: -1 });

        return new Response(JSON.stringify(pdfs), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
