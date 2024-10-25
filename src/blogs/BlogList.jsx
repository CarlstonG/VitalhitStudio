import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../redux/utils/fetchBlogs"; // Use the fetch function you created
import styled from "styled-components";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogsFromFirestore = await fetchBlogs();
        console.log("Blogs loaded in BlogList:", blogsFromFirestore);
        setBlogs(blogsFromFirestore);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BlogWrapper>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            {blog.image && <img src={blog.image} alt={blog.title} />}
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Date:</strong> {blog.date}</p>
          </div>
        ))}
      </div>
    </BlogWrapper>
  );
};

export default BlogList;

const BlogWrapper = styled.div`
  .blog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px; /* Space between cards */
    margin: 20px; /* Margin around the list */
  }

  .blog-post {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: calc(33.33% - 20px); /* 3 cards per row */
    box-sizing: border-box; /* Include padding in the width */

    img {
      width: 100%; /* Responsive image */
      height: auto; /* Maintain aspect ratio */
      border-radius: 8px 8px 0 0; /* Round top corners */
    }

    h2 {
      font-size: 1.5rem; /* Adjust title size */
      margin: 10px 0; /* Space around title */
    }

    p {
      margin: 5px 0; /* Space around paragraphs */
    }

    @media (max-width: 768px) {
      width: calc(50% - 20px); /* 2 cards per row on smaller screens */
    }

    @media (max-width: 480px) {
      width: 100%; /* 1 card per row on mobile */
    }
  }
`;
