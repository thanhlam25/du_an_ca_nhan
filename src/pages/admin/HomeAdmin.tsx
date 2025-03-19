import React from "react";
import AdminMenu from "../../layouts/adminMenu";

const HomeAdmin = () => {
    // Giả định dữ liệu từ backend
    const locdoanhthu = 1000000;
    const soluongSanPham = 150;
    const totalUsers = 500;
    const totalOrders = 200;
    const totalOrdersXuly = 50;
    const totalOrdersHoanthanh = 120;
    const totalOrdersDahuy = 30;
    const doanhThu = 500000000;
    const doanhThuTT = 480000000;
    const todayRevenue = 20000000;
    const todayRevenueTT = 19500000;
    const monthlyRevenue = 80000000;
    const monthlyRevenueTT = 78000000;
    const yearRevenue = 900000000;
    const yearRevenueTT = 880000000;

    const cards = [
        { title: "Tổng sản phẩm", value: soluongSanPham, color: "indigo" },
        { title: "Tổng thành viên", value: totalUsers, color: "green" },
        { title: "Tổng đơn hàng", value: totalOrders, color: "yellow" },
        { title: "Đơn hàng xử lý", value: totalOrdersXuly, color: "yellow" },
        { title: "Đơn hàng hoàn thành", value: totalOrdersHoanthanh, color: "yellow" },
        { title: "Đơn hàng bị hủy", value: totalOrdersDahuy, color: "red" },
        { title: `Tổng doanh thu (ước tính ${doanhThu.toLocaleString()}đ)`, value: `${doanhThuTT.toLocaleString()}đ`, color: "red" },
        { title: `Doanh thu hôm nay (ước tính ${todayRevenue.toLocaleString()}đ)`, value: `${todayRevenueTT.toLocaleString()}đ`, color: "green" },
        { title: `Doanh thu tháng này (ước tính ${monthlyRevenue.toLocaleString()}đ)`, value: `${monthlyRevenueTT.toLocaleString()}đ`, color: "green" },
        { title: `Doanh thu năm nay (ước tính ${yearRevenue.toLocaleString()}đ)`, value: `${yearRevenueTT.toLocaleString()}đ`, color: "green" },
    ];

    return (
        <>
            <div className="grid grid-cols-[1fr_4fr]">
                <div>
                    <AdminMenu />
                </div>
                <div>
                    <header className="bg-white shadow px-4 py-2 flex justify-between items-center fixed w-full">
                        <div className="text-lg font-bold">Thống kê</div>
                    </header>
                    <main className="p-4 flex-grow bg-gray-100 pt-20">
                        <div className="bg-white p-6 shadow rounded">
                            {/* Tiêu đề chính */}
                            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                                Chào mừng đến với trang quản trị admin <span className="text-indigo-600">IVY moda</span>
                            </h1>

                            {/* Lọc doanh thu */}
                            <div className="text-2xl font-bold text-gray-800 mb-6">Lọc doanh thu</div>
                            <form className="mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="from_date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Từ ngày
                                        </label>
                                        <input
                                            type="date"
                                            id="from_date"
                                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="to_date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Đến ngày
                                        </label>
                                        <input
                                            type="date"
                                            id="to_date"
                                            className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="flex items-end">
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition-all"
                                        >
                                            Lọc
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Doanh thu */}
                            <div className="p-4 bg-gray-50 border-l-4 border-green-500 rounded shadow-sm">
                                <h2 className="text-sm font-medium text-gray-600">Thống kê doanh thu theo ngày</h2>
                                <p className="text-2xl font-semibold text-gray-800">{locdoanhthu.toLocaleString()}đ</p>
                            </div>

                            {/* Thống kê */}
                            <div className="text-2xl font-bold text-gray-800 mb-6">Thống kê</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cards.map((card, index) => (
                                    <div key={index} className={`p-4 bg-gray-50 border-l-4 border-${card.color}-500 rounded shadow-sm`}>
                                        <h2 className="text-sm font-medium text-gray-600">{card.title}</h2>
                                        <p className="text-2xl font-semibold text-gray-800">{card.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default HomeAdmin;
