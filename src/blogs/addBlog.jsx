import React, { useState } from "react";
import { createBlog } from "./blogServices"; // Correctly importing the createBlog function
// Adjust the import as needed
import { uploadImage } from "../redux/utils/uploadImage"; // Import the upload function

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null); // State for the image file

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = ""; // Initialize variable for image URL

      // Upload the image if it exists
      if (image) {
        imageUrl = await uploadImage(image);
      }

      // Create the blog post with the image URL
      await createBlog({ title, content, author, date, image: imageUrl });
      // Reset form fields if needed
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])} // Set the image file
      />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default AddBlog;
