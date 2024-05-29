import React, { useState } from 'react';
import axios from '../axios';

// CreateModal component for creating new blog posts
const CreateModal = ({ onClose, onPostCreated }) => {
  const [title, setTitle] = useState(''); // State for title
  const [description, setDescription] = useState(''); // State for description
  const [category, setCategory] = useState(''); // State for category

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send post request to create new blog post
      const response = await axios.post('/api/v1/blog', { title, description, category });
      if (response.status === 201) {
        onPostCreated(); // Notify BlogPostListing to refresh the list
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  // Render create blog post form
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-70"></div>
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-gray-700 px-6 py-4">
            <h2 className="text-lg font-bold text-white">Create Blog</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="p-6">
              {/* Input fields for title, description, and category */}
            </div>
            <div className="flex justify-end px-6 py-4 bg-gray-700">
              {/* Submit and close buttons */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal; // Exporting CreateModal component