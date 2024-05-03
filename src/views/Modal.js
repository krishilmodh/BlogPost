import React, { useState, useEffect } from 'react';

const BlogModal = ({ blog, onSave, onClose }) => {
  const [editedBlog, setEditedBlog] = useState(blog);

  useEffect(() => {
    setEditedBlog(blog); // Update state when blog prop changes
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-70"></div>
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-gray-700 px-6 py-4">
            <h2 className="text-lg font-bold text-white">Edit Blog</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
              </svg>
            </button>
          </div>
          <div className="p-6">
            <input
              type="text"
              name="title"
              value={editedBlog.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 mb-4 focus:outline-none"
            />
            <textarea
              name="description"
              value={editedBlog.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none"
            ></textarea>
            {/* Add more fields as needed */}
          </div>
          <div className="flex justify-end px-6 py-4 bg-gray-700">
            <button
              onClick={() => onSave(editedBlog)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mr-2 focus:outline-none"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white font-semibold px-4 py-2 rounded focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
