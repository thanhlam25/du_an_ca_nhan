import React, { useState, useEffect } from 'react';
import { ErrorResponse, useNavigate } from 'react-router-dom';
import HeaderClient from '../../layouts/clientHeader'
import Footer from '../../components/clientFooter'
import MenuClient from '../../layouts/clientMenu'
import { useMutation } from '@tanstack/react-query';
import { Order } from '../../types/products';
import { AxiosError } from 'axios';

interface CartItem {
    cart_id: number;
    id: number;
    name: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
}

const Cart = () => {
  
    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                {/* Thanh menu */}
                <MenuClient />

                <article className="mt-[100px]">
                    <article className="grid grid-cols-[4fr_1.5fr] gap-10 mt-[100px]">
                        <div>
                            <div className="border w-full h-[96.6px] flex justify-center rounded-tl-[20px] rounded-br-[20px] ">
                                <div className="w-[14px] h-[14px] rounded border-2 border-[#e7e8e9] rounded-full bg-black mt-6 z-10 relative">
                                    <p className="text-[12px] mt-4 left-[-20px] w-16 absolute ">
                                        Giỏ hàng
                                    </p>
                                </div>
                                <div className=" h-[3px] w-[350px] bg-[#e7e8e9] mx-2 mt-[30px]"></div>
                                <div className="w-[14px] h-[14px] rounded rounded-full bg-white border-2 border-[#e7e8e9] mt-6 z-10 relative">
                                    <div className="text-[12px] mt-4 left-[-20px] w-16 absolute ">
                                        Đặt hàng
                                    </div>
                                </div>
                                <div className=" h-[3px] w-[350px] bg-[#e7e8e9] mx-2 mt-[30px]"></div>
                                <div className="w-[14px] h-[14px] rounded rounded-full bg-white border-2 border-[#e7e8e9]  mt-6 z-10 relative">
                                    <div className="text-[12px] mt-4 left-[-40px] w-28 absolute ">
                                        Hoàn thành đơn
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <div className="text-[24px] font-semibold">
                                    Giỏ hàng của bạn
                                </div>
                                <div className="text-[24px] text-[#d73831] font-semibold">
                                     Sản Phẩm
                                </div>
                            </div>
                            <div>
                            <table className="w-full bg-white table-auto border-collapse">
                    <thead className="border-b bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Ảnh sản phẩm</th> 
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tên sản phẩm</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Số lượng</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Size</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tổng tiền</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-700">
                                    <img src="/images/banner.webp" alt="Image" className="w-28 h-[140px] object-cover rounded"/>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-700">áo</td>
                                <td className="px-4 py-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-4">
                                        <div className="relative flex items-center justify-center w-[5.5rem] h-8 my-4">
                                            <button id="decreaseBtn"
                                                data-id="<?= $item['cart_id'] ?>"
                                                className="flex items-center justify-center border w-8 h-8 rounded rounded-tl-[15px] rounded-br-[15px] text-xl absolute left-0 top-0 z-20">
                                                -
                                            </button>
                                            <div id="quantityDisplay-<?= $item['cart_id'] ?>"
                                                className="flex items-center justify-center text-center text-sm border-y w-12 h-full z-10 bg-white">
                                              1
                                            </div>
                                            <button id="increaseBtn"
                                                data-id="<?= $item['cart_id'] ?>"
                                                className="flex items-center justify-center border w-8 h-8 rounded rounded-tl-[15px] rounded-br-[15px] text-xl absolute right-0 top-0 z-20">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-700">L</td>
                                <td className="px-4 py-2 text-sm text-gray-700" id="totalPriceProduct-<?php echo $item['cart_id']; ?>">
                                   sad
                                </td>
                                <td className="px-4 py-2 text-sm text-red-500 cursor-pointer" id="removeBtn-<?php echo $item['cart_id']; ?>">Xóa</td>
                            </tr>
                    </tbody>
                </table>
                            </div>
                            <div className="mt-6">
                                <button
                                   
                                    className="bg-white border border-black w-[250px] transition-all pt-[14px] pr-[24px] pb-[14px] pl-[24px] rounded-tl-[20px] rounded-br-[20px] hover:bg-black hover:text-white flex"
                                >
                                    <div className="mx-auto font-semibold">
                                        ← Tiếp tục mua hàng
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#fbfbfc] p-[22px] w-[400px]">
                                <div className="text-[20px] text-[#221F20]">
                                    Tổng tiền giỏ hàng
                                </div>
                                <br />
                                <div className="text-[14px] text-[57585A]">
                                    <div className="flex justify-between">
                                        <div>Tổng sản phẩm</div>
                                        
                                    </div>
                                </div>
                                <br />
                                <div className="text-[14px] text-[57585A]">
                                    <div className="flex justify-between">
                                        <div>Tổng tiền hàng</div>
                                        
                                    </div>
                                </div>
                                <br />
                                <div className="text-[14px] text-[57585A]">
                                    <div className="flex justify-between">
                                        <div>Tạm tính</div>
                                        <div className="font-semibold">756 đ</div>
                                    </div>
                                </div>
                                <div className="text-[14px] text-[#AC2F33] my-6">
                                    Sản phẩm nằm trong chương trình đồng giá, giảm giá trên 50% không hỗ trợ đổi trả
                                </div>
                                <hr />
                            </div>
                            <div>
                                
                                    <div className="text-red-500 text-center mt-4">
                                        Giỏ hàng của bạn trống, vui lòng thêm sản phẩm để đặt hàng.
                                    </div>
                               
                            </div>

                        </div>
                    </article>
                </article>
                <Footer />
            </div>
        </>
    );
}

export default Cart