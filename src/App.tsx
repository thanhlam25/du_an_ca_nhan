import React from 'react';
import './App.css'
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/client/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Cart from './pages/client/Cart';
import Chinh_sach_doi_tra from './pages/client/Chinh_sach_doi_tra';
import ChinhSachDieuKhoan from './pages/client/Chinh_sach_dieu_khoan';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/cart', element: <Cart /> },
    { path: '/chinh_sach_doi_tra', element: <Chinh_sach_doi_tra /> },
    { path: '/chinh_sach_dieu_khoan', element: <ChinhSachDieuKhoan /> },
    { path: '/register', element: <Register /> },

  ])
  return routes
}

export default App
