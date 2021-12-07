import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from './pages/Login'
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/products/:category" element={<ProductList />} exact/>
          <Route path="/product/:id" element={<Product />} exact/>
          <Route path="/cart" element={<Cart />} exact/>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} exact/>
          <Route path="/register" element={user ? <Navigate to="/" />: <Register />} exact/>
          <Route path="/success" element={<Success />} exact />x`x`
        </Routes>
      </Router>
    </>
  );
}

export default App;
