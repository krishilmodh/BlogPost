import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './views/Login';
import Provider, { ProviderContext } from './Provider'; // Importing Provider and ProviderContext
import BlogPostListing from './views/BlogPostListing';

// Main App component
function App() {
  return (
    <Provider> // Providing context to child components
      <Router> // Setting up routing
        <Routes>
          <Route path='/login' element={<Login />} /> // Route for login
          <Route path='/blogs' element={<ProtectedRoute />} /> // Protected route for blogs
          <Route path='/blogs/:id' element={<ProtectedRoute />} /> // Protected route for individual blog
        </Routes>
      </Router>
    </Provider>
  );
}

// Protected route component to handle login status
function ProtectedRoute() {
  const { isLogin } = React.useContext(ProviderContext); // Checking login status from context

  return isLogin ? <BlogPostListing /> : <Navigate to='/login' />; // If logged in, show blogs, else navigate to login
}

export default App; // Exporting App component