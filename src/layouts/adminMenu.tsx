import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Định nghĩa interface cho props của AdminMenu
interface MenuItem {
    name: string;
    icon: string;
    url: string;
    onClick?: () => void;
}

interface AdminMenuProps {
    className?: string; // Thêm prop className để nhận từ parent component
}

const AdminMenu: React.FC<AdminMenuProps> = ({ className }) => {
    const navigate = useNavigate();

    // Tách các hàm xử lý cho từng menu
    const handleDashboard = () => {
        console.log("Dashboard clicked");
        // Xử lý logic cho Dashboard
    };

    const handleRevenue = () => {
        console.log("Revenue clicked");
        // Xử lý logic cho Doanh thu
    };

    const handleAddProduct = () => {
        console.log("Add Product clicked");
        navigate('/admin/add-product');
    };

    const handleProducts = () => {
        console.log("Products clicked");
        navigate('/admin/list-product');
    };

    const handleCategories = () => {
        console.log("Categories clicked");
        // Xử lý logic cho Danh mục
    };

    const handleUsers = () => {
        console.log("Users clicked");
        // Xử lý logic cho Người dùng
    };

    const handleSettings = () => {
        console.log("Settings clicked");
        // Xử lý logic cho Cài đặt
    };

    const menuItems: MenuItem[] = [
        { 
            name: 'Dashboard', 
            icon: 'fas fa-tachometer-alt', 
            url: '/',
            onClick: handleDashboard 
        },
        { 
            name: 'Doanh thu', 
            icon: 'fas fa-chart-line', 
            url: '/admin/revenue',
            onClick: handleRevenue 
        },
        { 
            name: 'Thêm sản phẩm', 
            icon: 'fas fa-plus', 
            url: '/admin/add-product',
            onClick: handleAddProduct 
        },
        { 
            name: 'Sản phẩm', 
            icon: 'fas fa-box', 
            url: '/admin/products',
            onClick: handleProducts 
        },
        { 
            name: 'Danh mục', 
            icon: 'fas fa-folder', 
            url: '/admin/categories',
            onClick: handleCategories 
        },
        { 
            name: 'Người dùng', 
            icon: 'fas fa-users', 
            url: '/admin/users',
            onClick: handleUsers 
        },
        { 
            name: 'Cài đặt', 
            icon: 'fas fa-cog', 
            url: '/admin/settings',
            onClick: handleSettings 
        },
    ];

    return (
        <aside className={`bg-[#000000] text-white w-64 h-full p-6 ${className || ''}`}>
            <ul className="space-y-4">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                                `flex items-center p-3 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? 'bg-[#1A1A1A]' : 'hover:bg-[#1A1A1A]'
                                }`
                            }
                            onClick={(e) => {
                                if (item.onClick) {
                                    e.preventDefault(); // Ngăn chặn hành vi mặc định nếu cần
                                    item.onClick();
                                }
                            }}
                        >
                            <i className={`${item.icon} w-6 text-center`}></i>
                            <span className="ml-4">{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default AdminMenu;