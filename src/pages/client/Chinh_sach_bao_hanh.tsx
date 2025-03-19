import React from 'react';
import HeaderClient from '../../layouts/clientHeader';
import Footer from '../../components/clientFooter';
import MenuClient from '../../layouts/clientMenu';

const Cart = () => {
    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                {/* Thanh menu */}
                <MenuClient />

                {/* Banner Sale */}
                <article className='mt-28'>
                    <div className="flex gap-4 mb-[20px] mt-[90px] ">
                        <div className="text-sm">Trang chủ</div>
                        <div className="text-sm">-</div>
                        <div className="text-sm">Chính sách bảo hành</div>
                    </div>
                    <hr />
                    <div>
                        <div className="grid grid-cols-[1fr_2fr] gap-10 justify-center">
                            <div className="border border-gray-400 rounded-tl-[40px] rounded-br-[40px] h-85 p-12">
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Về IVY moda</a>
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Chính sách thẻ thành viên</a>
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Bảo hành trọn đời</a>
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Chính sách đổi trả</a>
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Hệ thống cửa hàng</a>
                                <a className="leading-[60px] text-[18px] font-semibold text-gray-600 block hover:text-black" href="">Q&A</a>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">CHÍNH SÁCH BẢO HÀNH & SỬA CHỮA TRỌN ĐỜI CỦA IVY moda</h2>
                                <p className="text-[16px] font-bold mb-4">Khi mua sắm sản phẩm tại IVY moda, bạn sẽ nhận được đặc quyền bảo hành trọn đời miễn phí!</p>

                                <div className="space-y-4 text-[16px]">
                                    <p className="font-bold">Tuy nhiên, trong chính sách này không bao gồm những trường hợp đặc biệt như sau:</p>
                                    <p className="font-normal text-base">- Các sản phẩm mang nhãn IVY Secret hoặc IVY Accessories...</p>
                                    <p className="font-normal text-base">- Cửa hàng chỉ bảo hành/sửa chữa đơn giản như cắt gấu, bóp nới sản phẩm...</p>
                                    <p className="font-normal text-base">- Đối với sản phẩm đồ da: Chỉ bảo hành dòng sản phẩm da thật trong vòng 06 tháng...</p>
                                    <p className="font-normal text-base">- Nếu muốn chỉnh sửa sản phẩm theo yêu cầu cá nhân, quý khách vui lòng mất thêm chi phí nguyên vật liệu.</p>
                                    <p className="font-normal text-base">- Đặc quyền với khách hàng mua hàng online: Quý khách có thể đến showroom chính hãng để sử dụng dịch vụ.</p>
                                    <p className="font-semibold">“Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY moda!”</p>
                                    <p className="font-semibold">Mọi thắc mắc liên hệ: 0246.662.3434</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[1.75fr_1.25fr] gap-10 justify-center mb-10 mt-6">
                        <div>
                            <img src="/images/huong_dan_mua_hang2.jpg" alt="Hướng dẫn mua hàng" className="w-full rounded-lg" />
                        </div>

                        <div className="p-8">
                            <h2 className="text-3xl font-semibold">Đồng hành cùng IVY moda</h2>
                            <p className="text-[16px] text-[#6C6D70] mt-4">Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY moda...</p>
                            <div className="py-3 px-6 border w-[250px] bg-black text-white text-[1rem] font-semibold mt-4 text-center">
                                <a href="tel:0548569879">GỌI NGAY: 0548 569 879</a>
                            </div>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
}

export default Cart;