import React, { useState } from 'react';
import axios from '../axios';

const CreateModal = ({ onClose, onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/blog', { title, description, category });
      if (response.status === 201) {
        onPostCreated(); // Notify BlogPostListing to refresh the list
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

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
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 mb-4 focus:outline-none"
              />
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none"
              ></textarea>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex justify-end px-6 py-4 bg-gray-700">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mr-2 focus:outline-none"
              >
                Create
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white font-semibold px-4 py-2 rounded focus:outline-none"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
