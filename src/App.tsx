import React from 'react';
import './App.css'
import { Route, Routes, useParams, useRoutes } from 'react-router-dom';
import Home from './pages/client/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Cart from './pages/client/Cart';
import Chinh_sach_doi_tra from './pages/client/Chinh_sach_doi_tra';
import ChinhSachDieuKhoan from './pages/client/Chinh_sach_dieu_khoan';
import HomeAdmin from './pages/admin/HomeAdmin';
import UserList from './pages/admin/UserList';
import ProductList from './pages/admin/ProductList';
import UserEdit from './pages/admin/UserEdit';
import DetailProduct from './pages/client/detailProduct'
const DetailProductWrapper = () => {
  const { id } = useParams();
  if (!id) {
    return <div>Product ID không hợp lệ</div>;
  }
  return <DetailProduct productId={id} />;
};
function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/cart', element: <Cart /> },
    { path: '/chinh_sach_doi_tra', element: <Chinh_sach_doi_tra /> },
    { path: '/chinh_sach_dieu_khoan', element: <ChinhSachDieuKhoan /> },
    { path: '/homeAdmin', element: <HomeAdmin /> },
    { path: '/homeAdmin/userList', element: <UserList /> },
    { path: '/homeAdmin/userEdit', element: <UserEdit /> },
    { path: '/homeAdmin/productList', element: <ProductList /> },
    { path: '/products/products/:id', element: <DetailProductWrapper /> },
    { path: '/register', element: <Register /> },



  ])
  return routes
}

export default App
