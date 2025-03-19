import React from 'react'

const adminMenu = () => {
    return (
        <>
            <aside className="w-64 bg-gray-800 text-white flex flex-col fixed h-full top-0 left-0">
                <div className="p-4 text-center text-lg font-bold border-b border-gray-700">
                    Admin Panel
                </div>
                <nav className="flex-grow">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <a href="?action=thongke" className="block">Thống kê</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <a href="?action=quan_ly_nguoi_dung" className="block">Quản lý người dùng</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <a href="?action=quan_ly_danh_muc" className="block">Quản lý danh mục</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <a href="?action=products" className="block">Quản lý sản phẩm</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <a href="?action=orderadmin" className="block">Quản lý đơn hàng</a>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-700 text-center">
                    <a href="?action=logout" className="text-sm text-gray-400 hover:underline">Logout</a>
                </div>
            </aside>
        </>
    )
}

export default adminMenu