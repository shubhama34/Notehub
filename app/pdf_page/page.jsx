"use client";
import { useState } from "react";
import { storage } from "@/utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import PdfViewer from "@/app/components/pdfViewer";
export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true); // Set uploading to true at the start of the upload process

    const fileRef = ref(storage, `pdfs/${file.name + v4()}`);
    try {
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);
      setUrl(fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false); // Set uploading to false after the upload process is complete
    }
  };

  return (
    <div>
      <h1>Upload PDF to Firebase</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-red-200 px-2 w-max"
          disabled={!file || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {url && (
        <div>
          <h2>Uploaded File</h2>
          <span href={url} target="_blank" rel="noopener noreferrer">
            View PDF
          </span>
          <PdfViewer url={url} />
        </div>
      )}
    </div>
  );
}
