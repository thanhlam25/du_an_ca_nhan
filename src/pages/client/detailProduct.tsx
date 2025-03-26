import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import HeaderClient from '../../layouts/clientHeader';
import MenuClient from '../../layouts/clientMenu';
import Footer from '../../layouts/clientFooter';

import { toast } from 'react-toastify';
import { CartItem } from '../../types/orders';
import { getById } from '../../api/provider';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailProduct = ({ productId }: { productId: string }) => {
    const queryClient = useQueryClient();

    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getById({ namespace: "products", endpoint: "products", id: productId }),
    });

    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('gioi_thieu');
    const {id} = useParams();

    useEffect(() => {
        if (product) {
            if (product.colors.length > 0) {
                setSelectedColor(product.colors[0]._id!);
            } else {
                setSelectedColor(null);
            }
            const firstAvailableSize = product.sizes.find((size: { stock: number; }) => size.stock > 0);
            if (firstAvailableSize) {
                setSelectedSize(firstAvailableSize.size);
            } else {
                setSelectedSize(null);
            }
        }
    }, [product]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    const addProductToCart = async (cartItem: CartItem) => {
        try {
            const token = localStorage.getItem('accessToken');
           console.log(token);
           
            
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}cart/add`, 
                cartItem,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw new Error('Lỗi khi thêm vào giỏ hàng');
        }
    };
    const addToCartMutation = useMutation({
        mutationFn: addProductToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] }); // Cập nhật giỏ hàng nếu cần
            toast.success('Thêm vào giỏ hàng thành công');
        },
        onError: (error: Error) => {
            console.error('Lỗi từ server:', error.message);
            toast.error('Lỗi khi thêm sản phẩm');
        },
    });

    const handleQuantityChange = (change: number) => {
        const selectedSizeStock = product?.sizes.find((s: { size: string | null; }) => s.size === selectedSize)?.stock || Infinity;
        setQuantity((prev) => {
            const newQuantity = prev + change;
            if (newQuantity < 1) return 1;
            if (newQuantity > selectedSizeStock) return selectedSizeStock;
            return newQuantity;
        });
    };

    const isOutOfStock = product?.sizes.every((size: { stock: number; }) => size.stock === 0) || false;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product: {(error as Error).message}</div>;
    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('Vui lòng chọn size!');
            return;
        }
    
        const cartItem: CartItem = {
            productId: productId,
            size: selectedSize,
            quantity: quantity
        };
    
        addToCartMutation.mutate(cartItem);
    };
    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                <MenuClient />
                <article className="mt-[98px]">
                    {/* Breadcrumb */}
                    <div className="flex gap-4 my-4">
                        <div className="text-sm"><a href="?action=home">Trang chủ</a></div>
                        <div className="text-sm">-</div>
                        <div className="text-sm">Danh mục cha</div>
                        <div className="text-sm">-</div>
                        <div className="text-sm">Danh mục con</div>
                    </div>
                    <hr className="mb-8" />

                    <div className="grid grid-cols-2">
                        {/* Product Images */}
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

                        {/* Product Details */}
                        <div className="pl-[30px]">
                            <div className="text-3xl font-[550]">{product.name}</div>
                            <div className="flex items-center gap-4 py-4">
                                <div className="text-gray-500">SKU: {product.sku}</div>
                                <div className="flex gap-[2px]">
                                    {Array(5).fill(0).map((_, i) => (
                                        <img key={i} src="/images/star.png" className="w-4" alt="star" />
                                    ))}
                                </div>
                                <div className="text-gray-500">(0 đánh giá)</div>
                            </div>
                            <div className="text-2xl font-[550]">
                                {product.price.toLocaleString('vi-VN')}đ
                            </div>

                            {/* Color Selection */}
                            <div className="text-xl font-[550] my-4">
                                Màu sắc: {product.colors.find((c: { _id: string | null; }) => c._id === selectedColor)?.colorName || 'Chưa chọn'}
                            </div>
                            <div className="flex gap-2 py-2">
                                {product.colors.map((color: { _id: string | number | bigint | ((prevState: string | null) => string | null) | null | undefined; actualColor: string; }) => (
                                    <div
                                        key={String(color._id)}
                                        className={`rounded-full w-5 h-5 relative flex items-center justify-center ${selectedColor === color._id ? 'border border-gray-300' : ''}`}
                                        style={{ backgroundColor: color.actualColor }}
                                        onClick={() => setSelectedColor(String(color._id!))}
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

                            {/* Size Selection */}
                            <div className="flex gap-4 my-4">
                                {product.sizes.map((item: { _id: React.Key | null | undefined; stock: number; size: number | boolean | React.SetStateAction<string | null> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | undefined; }) => (
                                    <div
                                        key={item._id}
                                        className={`border border-black w-[46px] h-[30px] flex items-center justify-center text-black ${item.stock === 0 ? 'line-through cursor-not-allowed opacity-50 bg-gray-100' : 'cursor-pointer hover:bg-gray-100'} ${selectedSize === item.size ? 'bg-gray-200' : ''}`}
                                        onClick={() => item.stock > 0 && setSelectedSize(String(item.size))}
                                    >
                                        {String(item.size)}
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

                            {/* Action Buttons */}
                            <div className="flex gap-4 mb-20">
                            <div
    className={`my-4 text-lg font-semibold w-[174px] h-[48px] rounded-tl-[15px] rounded-br-[15px] flex justify-center items-center transition-all duration-300 ${
        isOutOfStock
            ? 'bg-gray-400 text-white opacity-50 pointer-events-none'
            : 'bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer'
    }`}
    onClick={handleAddToCart}
>
    {isOutOfStock ? 'Hết hàng' : 'Thêm vào giỏ'}
</div>
                                <div
                                    className={`my-4 text-lg font-semibold w-[124px] h-[46px] rounded-tl-[15px] rounded-br-[15px] flex justify-center items-center transition-all duration-300 ${isOutOfStock
                                        ? 'bg-white text-gray-400 border border-gray-400 opacity-50 pointer-events-none'
                                        : 'bg-white text-black border border-black hover:bg-black hover:text-white cursor-pointer'
                                        }`}
                                    onClick={() => !isOutOfStock && console.log('Buy now clicked')}
                                >
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

                            {/* Tabs */}
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
                </article>
                <Footer />
            </div>
        </>
    );
};

export default DetailProduct;