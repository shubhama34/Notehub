import Pdf from "@/models/pdf";
import { connectToDB } from "@/utils/database";

export async function POST(req) {
    try {

        const { pdfId, userId, status } = await req.json()


        // Validate the input
        if (!pdfId || !userId) {
            return new Response("Pdf ID and Publisher ID are required", { status: 400 });
        }

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }
        let pdf;
        if (status == "like") {
            pdf = await Pdf.findByIdAndUpdate(
                pdfId,
                { $addToSet: { likes: userId } }, // Using $addToSet to avoid duplicates
                { new: true } // Return the updated document
            );

            if (!pdf) {
                return new Response("Pdf not found", { status: 404 });
            }
        }
        else {
            pdf = await Pdf.findByIdAndUpdate(
                pdfId,
                { $pull: { likes: userId } }, // Using $pull to remove the publisher ID
                { new: true } // Return the updated document
            );
            if (!pdf) {
                return new Response("Pdf not found", { status: 404 });
            }
        }
        // Find the user and update the favourite_publishers list


        return new Response(JSON.stringify(pdf), { status: 200 });
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}