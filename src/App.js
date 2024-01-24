import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DetailProductPage from './pages/DetailProductPage';
import ShopingCartPage from './pages/ShopingCartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/product" element={<DetailProductPage />} />
                <Route path="/shopingCart" element={<ShopingCartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
