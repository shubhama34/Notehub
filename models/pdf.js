import { Schema, model, models } from "mongoose";

const PdfSchema = new Schema({
    pdfUrl:{
        type: String,
    },
    publisherName: {
        type: String,
        required: [true, "Publisher name is required"]
    },
    publisherId: {
        type: String,
        required: [true, "Publisher ID is required"]
    },
    likes: {
        type: [String],
        default: []
    },
    moneyEarned: {
        type: Number,
        default: 0
    },
    claimed: {
        type: Number,
        default: 0
    },
    pdfTitle: {
        type: String,
        required: [true, "PDF title is required"]
    },
    professorName: {
        type: String,
        default: null
    },
    universityName: {
        type: String,
        default: null
    },
    partOfNotes: {
        type: String,
        default: null
    },
    subscribed: {
        type: Boolean,
        default: false
    },
    reviews: {
        type: [String],  // Array of strings to store multiple reviews
        default: []
    },
    dateTime: {
        type: Date,
        default: Date.now  // Defaults to the current timestamp
    },
    stream: {
        type: String 
    },
    course: {
        type: String 
    },
    university: {
        type: String 
    },
    semester: {
        type: String 
    },
    subject: {
        type: String 
    }
});

const Pdf = models.Pdf || model("Pdf", PdfSchema);
export default Pdf;
