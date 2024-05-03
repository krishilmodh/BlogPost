import React, { useEffect, useState } from "react";
import axios from "../axios";
import Modal from "./Modal";
import CreateModal from "./CreateModal";

const BlogPostListing = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const fetchAllBlogs = async () => {
  try {
    const data = await axios.get("/api/v1/blog");
    setPosts(data.data); // Updates the posts state with the fetched data
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};

useEffect(() => {
  fetchAllBlogs(); // Calls fetchAllBlogs when the component mounts
}, []);

  const handlePostCreated = () => {
    console.log("New blog post created!");
    fetchAllBlogs();
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const handleSave = async (editedBlog) => {
    try {
      const response = await axios.put(
        `/api/v1/blog/${editedBlog.id}`,
        editedBlog
      );
      if (response.status === 200) {
        fetchAllBlogs();
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
    setIsModalOpen(false);
  };

const handleDelete = async (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this blog post?");
  if (isConfirmed) {
    try {
      const response = await axios.delete(`/api/v1/blog/${id}`);
      if (response.status === 204) {
        fetchAllBlogs(); // This updates the list without needing a page refresh
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  }
};
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateModalOpen = () => {
    setIsCreateModalOpen(true);
  };

  const handleCreateModalClose = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <div className="max-w-8xl  px-14 sm:px-16 lg:px-18 py-12  bg-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Blog Posts</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleCreateModalOpen}
          className="bg-green-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Create Blog
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-md rounded-md p-6 text-gray-200 mb-6"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-teal-500 font-semibold">
                {post.category}
              </span>
              <div>
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          blog={currentBlog}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
      {isCreateModalOpen && (
        <CreateModal
          onClose={handleCreateModalClose}
          onPostCreated={handlePostCreated}
        />
      )}
    </div>
  );
};

export default BlogPostListing;
