import React, { useState } from 'react';
import AdminMenu from '../../layouts/adminMenu';

const UserEdit = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        joinDate: '',
        sex: '',
        city: '',
        district: '',
        commune: '',
        address: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Updated User: ", user);
        // Thêm logic gửi dữ liệu lên backend tại đây
    };

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
                <div className="bg-white p-6 shadow rounded">
                    <h2 className="text-xl font-semibold mb-4">Chỉnh sửa thông tin người dùng</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="firstName" value={user.firstName} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="lastName" value={user.lastName} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="text" name="phone" value={user.phone} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Sex</label>
                                <select name="sex" value={user.sex} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" value={user.city} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">District</label>
                                <input type="text" name="district" value={user.district} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Commune</label>
                                <input type="text" name="commune" value={user.commune} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" name="address" value={user.address} onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        {/* Nút cập nhật */}
                        <div className="flex justify-end">
                            <button type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700">
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default UserEdit;