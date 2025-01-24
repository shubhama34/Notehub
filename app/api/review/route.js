import Pdf from "@/models/pdf";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {
        const { pdfId, review } = await req.json();

        // Validate the input
        if (!pdfId || !review) {
            return new Response("Pdf ID and review are required", { status: 400 });
        }

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

        // Find the PDF and update the reviews list
        const pdf = await Pdf.findByIdAndUpdate(
            pdfId,
            { $push: { reviews: review } }, // Using $push to allow duplicates
            { new: true } // Return the updated document
        );

        if (!pdf) {
            return new Response("Pdf not found", { status: 404 });
        }

        return new Response(JSON.stringify(pdf), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
