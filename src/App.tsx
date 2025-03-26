import React from 'react';
import './App.css'
import { Route, Routes, useParams, useRoutes } from 'react-router-dom';
import Home from './pages/client/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import DetailProduct from './pages/client/detailProduct';
import Admin from './pages/admin/home';
import AddProduct from './pages/admin/addProduct';
import Categories from './pages/admin/Categories';
import PrivateRoute from './components/PrivateRoute';
import ListProduct from './pages/admin/listProduct';
import EditProduct from './pages/admin/EditProduct';
function App() {

  const DetailProductWrapper = () => {
    const { id } = useParams();
    if (!id) {
      return <div>Product ID không hợp lệ</div>;
    }
    return <DetailProduct productId={id} />;
  };
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/products/:id', element: <DetailProductWrapper /> },


    { path: '/admin', element: <PrivateRoute element={<Admin />} /> },
    { path: '/admin/add-product', element: <PrivateRoute element={<AddProduct />} /> },
    { path: '/admin/list-product', element: <PrivateRoute element={<ListProduct />} /> },
    { path: '/admin/edit-product/:productId', element: <PrivateRoute element={<EditProduct />} /> },
    { path: '/admin/categories', element: <PrivateRoute element={<Categories />} /> },
  ])
  return routes
}

export default App
