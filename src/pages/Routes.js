import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "../components/Header/index";
import Footer from "../components/Footer";

import Home from './Home/index';
import Men from './Men/index';
import Women from './Women/index';
import Kids from './kids/index';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Basket from './Basket/Basket'


export default function CustomRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/basket" element={<Basket />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
