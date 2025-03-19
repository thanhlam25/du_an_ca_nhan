import React from 'react';
import AdminMenu from '../../layouts/adminMenu';

const products = [
  { id: 1, name: 'Áo Thun', price: 250000, sku_code: 'AT001', hex_color: '#FF5733' },
  { id: 2, name: 'Quần Jeans', price: 500000, sku_code: 'QJ002', hex_color: '#3498DB' },
  { id: 3, name: 'Giày Sneakers', price: 800000, sku_code: 'GS003', hex_color: '#2ECC71' },
];

const ProductList = () => {
  return (
    <div className="flex-1 flex flex-col ml-64">
        <div>
                    <AdminMenu />
        </div>
      {/* Top Navbar */}
      <header className="bg-white shadow px-4 py-2 flex justify-between items-center fixed w-full">
        
        <a href="?action=add_product" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Thêm sản phẩm
        </a>
      </header>

      {/* Main Section */}
      <main className="p-4 flex-grow bg-gray-100 pt-16">
        <div className="bg-white p-6 shadow rounded">
        <div className='px-4 py-6 '>
                <input className="w-[260px] bg-[#F9FAFB] h-[40px] px-[12px] py-[8px] rounded-lg border-2 border-gray-400" placeholder="Search..." type="search" title="Search within table" aria-controls="export-table"/>
            </div>
          <table id="export-table" className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Tên sản phẩm</th>
                <th className="px-4 py-2 border">Giá</th>
                <th className="px-4 py-2 border">Mã SKU</th>
                <th className="px-4 py-2 border">Màu sắc</th>
                <th className="px-4 py-2 border">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-2 border">{product.id}</td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.price.toLocaleString()} đ</td>
                  <td className="px-4 py-2 border">{product.sku_code}</td>
                  <td className="px-4 py-2 border flex items-center">
                    <div className="inline-block w-6 h-6 rounded" style={{ backgroundColor: product.hex_color }}></div>
                    <span className="ml-2">{product.hex_color}</span>
                  </td>
                  <td className="px-4 py-2 border">
                    <a href={`?action=edit_product&id=${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Chỉnh sửa</a>
                    <a href={`?action=delete_product&id=${product.id}`} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-4" onClick={() => window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')}>Xóa</a>
                    <a href={`?action=add_color&id=${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Thêm màu</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductList;