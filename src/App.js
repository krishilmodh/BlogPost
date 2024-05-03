import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './views/Login';
import Provider, { ProviderContext } from './Provider'; // Ensure correct import
import BlogPostListing from './views/BlogPostListing';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/blogs' element={<ProtectedRoute />} />
          <Route path='/blogs/:id' element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </Provider>
  );
}

// Protected route component to handle login status
function ProtectedRoute() {
  const { isLogin } = React.useContext(ProviderContext);

  return isLogin ? <BlogPostListing /> : <Navigate to='/login' />;
}

export default App;
