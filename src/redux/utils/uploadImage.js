// utils/uploadImage.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig"; // Adjust the path to your firebaseConfig

export const uploadImage = async (file) => {
  const storageRef = ref(storage, `images/${file.name}`); // Create a reference to the storage location

  try {
    await uploadBytes(storageRef, file); // Upload the file
    const url = await getDownloadURL(storageRef); // Get the download URL
    return url; // Return the download URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Throw error for handling in the calling function
  }
};
