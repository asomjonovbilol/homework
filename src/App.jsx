import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Single from './pages/single/Single';
import Dashboard from './components/adminpanel/Dashboard';
import EditProduct from './components/adminpanel/EditProduct';
import { useGetCategoryQuery } from './context/getRequest'; // Assuming you have this hook for fetching categories

function App() {
  const [login, setLogin] = useState(localStorage.getItem('login') === 'true');
  const { data: category } = useGetCategoryQuery(); // Fetch categories

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Single />} />
        <Route 
          path="/admin" 
          element={login ? <Dashboard category={category} setLogin={setLogin} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/edit/:id" 
          element={login ? <EditProduct category={category} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/login" 
          element={<Login setLogin={setLogin} />} 
        />
        {/* Add other routes as necessary */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
