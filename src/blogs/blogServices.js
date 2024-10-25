import { collection, addDoc } from "firebase/firestore"; // Import addDoc for creating documents
import { db } from "../firebaseConfig"; // Make sure the Firestore instance is imported

// Function to add a blog post
export const createBlog = async (blogData) => {
  try {
    const blogsCollection = collection(db, "blog"); // Reference to 'blogs' collection
    const docRef = await addDoc(blogsCollection, blogData); // Add a new blog post
    return docRef.id; // Return the document ID of the newly created blog post
  } catch (error) {
    console.error("Error adding blog: ", error);
    throw new Error("Could not create the blog post");
  }
};
