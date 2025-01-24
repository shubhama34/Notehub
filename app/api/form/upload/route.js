// pages/api/upload.js

import Pdf from "@/models/pdf";



export async function POST(req) {
    try {
        const { pdfUrl,
            publisherName,
            publisherId,
            pdfTitle,
            professorName,
            universityName,
            partOfNotes,
            subscribed,
            stream,
            course,
            university,
            semester,
            subject } = await req.json();

        // Improved error handling for database connection
        try {
            await connectToDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return new Response("Database connection error", { status: 500 });
        }

    

        let pdf = await Pdf.create({
            pdfUrl ,
            publisherName,
            publisherId,
            pdfTitle,
            professorName,
            universityName,
            partOfNotes,
            subscribed,
            stream,
            course,
            university,
            semester,
            subject
        });

        // Create a JWT token for the user
       
        return new Response(JSON.stringify({ pdf }), { status: 201 });
        // }
    } catch (error) {
        console.error("Internal server error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
      

}