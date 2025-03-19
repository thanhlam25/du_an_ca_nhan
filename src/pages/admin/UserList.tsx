import React from 'react';
import AdminMenu from '../../layouts/adminMenu';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, first_name: 'Nguyen', name: 'An', email: 'nguyen.an@example.com', join_date: '2024-01-15' },
  { id: 2, first_name: 'Tran', name: 'Binh', email: 'tran.binh@example.com', join_date: '2023-12-10' },
  { id: 3, first_name: 'Le', name: 'Cuong', email: 'le.cuong@example.com', join_date: '2023-11-20' },
];

const UserList = () => {
  return (
    <div className="flex-1 flex flex-col ml-64">
        <div>
                    <AdminMenu />
        </div>
      {/* Top Navbar */}
      <header className="bg-white shadow px-4 py-2 flex justify-between items-center fixed w-full">
        <div className="text-lg font-bold">Danh sách người dùng</div>
      </header>

      {/* Main Section */}
      <main className="p-4 flex-grow bg-gray-100 pt-16">
        <div className="bg-white shadow rounded">
            <div className='px-4 py-6 '>
                <input className="w-[260px] bg-[#F9FAFB] h-[40px] px-[12px] py-[8px] rounded-lg border-2 border-gray-400" placeholder="Search..." type="search" title="Search within table" aria-controls="export-table"/>
            </div>
          <table id="export-table" className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Họ</th>
                <th className="p-2">Tên</th>
                <th className="p-2">Email</th>
                <th className="p-2">Ngày tham gia</th>
                <th className="p-2">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="p-2 text-gray-900">{user.first_name}</td>
                  <td className="p-2 text-gray-900">{user.name}</td>
                  <td className="p-2 text-gray-900">{user.email}</td>
                  <td className="p-2 text-gray-900">{user.join_date}</td>
                  <td className="p-2">
                    <Link to='/homeAdmin/userEdit'>
                        <button className="text-blue-500 hover:underline">Sửa</button>
                   </Link>
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

export default UserList;
