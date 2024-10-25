// fetchBlogs.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Import Firestore instance

export const fetchBlogs = async () => {
  const blogsCollection = collection(db, "blog"); // Reference the correct collection name
  const blogSnapshot = await getDocs(blogsCollection); // Fetch the blogs
  const blogList = blogSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // Spread the document data
  }));
  return blogList; // Return the blog list
};