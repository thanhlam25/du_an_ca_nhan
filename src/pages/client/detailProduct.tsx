import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import HeaderClient from '../../layouts/clientHeader';
import MenuClient from '../../layouts/clientMenu';
import Footer from '../../layouts/clientFooter';
import { getProductById } from '../../services/productService';
import axios from 'axios';
import { RegisterForm, UserId } from '../../types/users';
import { getUser } from '../../services/userService';
import { Order } from '../../types/products';


type UserProductDetails = UserId & Order;

const DetailProduct = ({ productId }: { productId: string }) => {
    const queryClient = useQueryClient();

    // Lấy thông tin sản phẩm
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getProductById(productId),
    });

    // Lấy thông tin người dùng
    const { data: user, isLoading: userLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    const [selectedColor, setSelectedColor] = useState(product?.colors[0]?._id || '');
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('gioi_thieu');
    const [showAlert, setShowAlert] = useState(false);

    const addToCartMutation = useMutation({
        mutationFn: async (orderData: UserProductDetails) => {
            console.log('Dữ liệu gửi lên API:', orderData); // Log để kiểm tra
            const response = await axios.post('http://localhost:3000/order', orderData);
            return response.data;
        },
        onSuccess: () => {
            setShowAlert(true); // Hiển thị thông báo thành công
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
        onError: (error: any) => {
            console.error('Lỗi từ API:', error.response?.data || error.message);
            alert(`Có lỗi xảy ra khi thêm vào giỏ hàng: ${error.message}`);
        },
    });

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleQuantityChange = (change: number) => {
        const selectedSizeStock = product?.sizes.find((s) => s.size === selectedSize)?.stock || Infinity;
        setQuantity((prev) => {
            const newQuantity = prev + change;
            if (newQuantity < 1) return 1;
            if (newQuantity > selectedSizeStock) return selectedSizeStock;
            return newQuantity;
        });
    };

    const handleAddToCart = () => {
        // Kiểm tra các điều kiện trước khi gửi
        if (!user) {
            alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
            return;
        }
        if (!selectedSize) {
            alert('Vui lòng chọn size!');
            return;
        }
        if (quantity <= 0) {
            alert('Vui lòng chọn số lượng!');
            return;
        }

        // Gửi dữ liệu lên API
        addToCartMutation.mutate({
            _id: productId, // userId từ thông tin người dùng
            productId: user._id, // productId từ props
            size: selectedSize, // size từ state
            quantity: quantity, // quantity từ state
        });
    };

    if (isLoading || userLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product: {(error as Error).message}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                <MenuClient />
                <article className="mt-[98px]">
                    <div className="flex gap-4 my-4">
                        <div className="text-sm"><a href="?action=home">Trang chủ</a></div>
                        <div className="text-sm">-</div>
                        <div className="text-sm">Danh mục cha</div>
                        <div className="text-sm">-</div>
                        <div className="text-sm">Danh mục con</div>
                    </div>
                    <hr className="mb-8" />

                    <div className="grid grid-cols-2">
                        <div className="w-[100%] flex gap-3">
                            <div id="zoomLayout" className="relative w-[80%] h-[844.5px] overflow-hidden">
                                <img
                                    id="mainImage"
                                    src={product.images.main}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                    alt={product.name}
                                />
                            </div>
                            <div className="relative overflow-hidden h-[720px] mt-[60px]">
                                <div id="slideshow" className="flex flex-col gap-4 transition-transform duration-500">
                                    {[product.images.main, product.images.hover, ...product.images.product].map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            className="w-[100%] h-[174px] object-cover cursor-pointer"
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => {
                                                const mainImage = document.getElementById('mainImage') as HTMLImageElement | null;
                                                if (mainImage) mainImage.src = img;
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pl-[30px]">
                            <div className="text-3xl font-[550]">{product.name}</div>
                            <div className="flex items-center gap-4 py-4">
                                <div className="text-gray-500">SKU: {product.sku}</div>
                                <div className="flex gap-[2px]">
                                    <img src="/images/star.png" className="w-4" alt="star" />
                                    <img src="/images/star.png" className="w-4" alt="star" />
                                    <img src="/images/star.png" className="w-4" alt="star" />
                                    <img src="/images/star.png" className="w-4" alt="star" />
                                    <img src="/images/star.png" className="w-4" alt="star" />
                                </div>
                                <div className="text-gray-500">(0 đánh giá)</div>
                            </div>
                            <div className="text-2xl font-[550]">
                                {product.price.toLocaleString('vi-VN')}đ
                            </div>
                            <div className="text-xl font-[550] my-4">
                                Màu sắc: {product.colors.find((c) => c._id === selectedColor)?.colorName}
                            </div>
                            <div className="flex gap-2 py-2">
                                {product.colors.map((color) => (
                                    <div
                                        key={color._id}
                                        className={`rounded-full w-5 h-5 relative flex items-center justify-center ${selectedColor === color._id ? 'border border-gray-300' : ''}`}
                                        style={{ backgroundColor: color.actualColor }}
                                        onClick={() => setSelectedColor(color._id!)}
                                    >
                                        {selectedColor === color._id && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`w-3 h-3 fill-current ${color.actualColor === '#fafafa' ? 'text-gray-400' : 'text-white'}`}
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 my-4">
                                {product.sizes.map((item) => (
                                    <div
                                        key={item._id}
                                        className={`border border-black w-[46px] h-[30px] flex items-center justify-center text-black ${item.stock === 0 ? 'line-through cursor-not-allowed opacity-50 bg-gray-100' : 'cursor-pointer hover:bg-gray-100'} ${selectedSize === item.size ? 'bg-gray-200' : ''}`}
                                        onClick={() => {
                                            if (item.stock > 0) setSelectedSize(item.size);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>

                            <div className="text-xs flex items-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-3 h-3 text-gray-500"
                                >
                                    <path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z" />
                                </svg>
                                Kiểm tra size của bạn
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="font-[500] text-[#727171]">Số lượng</div>
                                <div className="flex items-center justify-center gap-0.5 relative w-36 h-12 my-4">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="flex items-center justify-center border w-12 h-12 rounded rounded-tl-[15px] rounded-br-[15px] text-xl absolute left-0"
                                    >
                                        -
                                    </button>
                                    <div className="flex items-center justify-center text-center text-sm border-y w-20 h-full z-10 absolute">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="flex items-center justify-center border w-12 h-12 rounded rounded-tl-[15px] rounded-br-[15px] text-xl absolute right-0"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-20">
                                <div
                                    onClick={handleAddToCart}
                                    className="bg-black my-4 text-lg font-semibold text-white w-[174px] h-[48px] rounded-tl-[15px] rounded-br-[15px] flex justify-center items-center hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer transition-all duration-300"
                                >
                                    {addToCartMutation.isPending ? 'Đang thêm...' : 'Thêm vào giỏ'}
                                </div>
                                <div className="bg-white my-4 text-lg font-semibold text-black border border-black w-[124px] h-[46px] rounded-tl-[15px] rounded-br-[15px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                                    Mua hàng
                                </div>
                                <div className="bg-white my-4 text-lg font-semibold text-black border border-black w-[46px] h-[46px] rounded-tl-[15px] rounded-br-[15px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 transition-all duration-300 group-hover:fill-white group-hover:scale-110"
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                </div>
                            </div>

                            <hr />

                            <div>
                                <div className="flex gap-6">
                                    <div
                                        className={`tab-button text-xs font-semibold mt-10 mb-5 cursor-pointer px-2 py-1 ${activeTab === 'gioi_thieu' ? 'text-black' : 'text-gray-500'}`}
                                        onClick={() => handleTabChange('gioi_thieu')}
                                    >
                                        GIỚI THIỆU
                                    </div>
                                    <div
                                        className={`tab-button text-xs font-semibold mt-10 mb-5 cursor-pointer px-2 py-1 ${activeTab === 'chi_tiet' ? 'text-black' : 'text-gray-500'}`}
                                        onClick={() => handleTabChange('chi_tiet')}
                                    >
                                        CHI TIẾT SẢN PHẨM
                                    </div>
                                    <div
                                        className={`tab-button text-xs font-semibold mt-10 mb-5 cursor-pointer px-2 py-1 ${activeTab === 'bao_quan' ? 'text-black' : 'text-gray-500'}`}
                                        onClick={() => handleTabChange('bao_quan')}
                                    >
                                        BẢO QUẢN
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className={`tab-content text-[14px] leading-6 ${activeTab === 'gioi_thieu' ? '' : 'hidden'}`}>
                                    {product.description || 'Mô tả ngắn về sản phẩm.'}
                                </div>
                                <div className={`tab-content text-[14px] leading-6 ${activeTab === 'chi_tiet' ? '' : 'hidden'}`}>
                                    {product.description || 'Mô tả chi tiết của sản phẩm.'}
                                </div>
                                <div className={`tab-content text-[14px] leading-6 ${activeTab === 'bao_quan' ? '' : 'hidden'}`}>
                                    Hướng dẫn bảo quản: Chỉ giặt khô, không giặt ướt.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/images/banner1.3.webp"
                            className="rounded-tl-[80px] rounded-br-[80px] my-7"
                            alt="Banner"
                        />
                    </div>

                    <div
                        id="alert-3"
                        className={`flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 ${showAlert ? '' : 'hidden'}`}
                        role="alert"
                    >
                        <svg
                            className="flex-shrink-0 w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">
                            Thêm sản phẩm vào giỏ hàng thành công!
                        </div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                            onClick={() => setShowAlert(false)}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;