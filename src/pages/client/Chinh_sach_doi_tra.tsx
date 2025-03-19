import React from 'react'
import HeaderClient from '../../layouts/clientHeader'
import Footer from '../../components/clientFooter'
import MenuClient from '../../layouts/clientMenu'

const Chinh_sach_doi_tra = () => {
    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                {/* Thanh menu */}
                <MenuClient />
                <div className="flex gap-4 mb-[20px] mt-[90px] ">
                    <div className="text-sm">Trang chủ</div>
                    <div className="text-sm">-</div>
                    <div className="text-sm">Chính sách bảo hành</div>
                </div>
                <hr />
                <article className="mt-[50px]">
                    <div className="grid grid-cols-[1fr_2fr] gap-10  justify-center">
                        <div>
                            <div className="menu border border-gray-300 rounded-tl-[40px] rounded-br-[40px] p-12">
                                <div>
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Về IVY moda
                                    </a>
                                    <br />
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Chính sách thẻ thành viên
                                    </a>
                                    <br />
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Bảo hành trọn đời
                                    </a>
                                    <br />
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Chính sách đổi trả
                                    </a>
                                    <br />
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Hệ thống cửa hàng
                                    </a>
                                    <br />
                                    <a className="leading-[15px] text-[14px] font-semibold text-gray-500 block hover:text-black" href="">
                                        Q&A
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-[24px] font-semibold mt-0 mr-0 mb-[10px] ml-0">
                                CHÍNH SÁCH ĐỔI HÀNG
                            </div><br />
                            <div className="text-[16px] font-bold mt-0 mr-0 mb-[10px] ml-0 mx-auto">
                                1. THỜI GIAN ĐỔI TRẢ
                            </div><br />
                            <div className="space-y-0.25  text-[16px] ">
                                <div>
                                    Thời gian đổi trả trong vòng 15 ngày kể từ ngày khách nhận được hàng.
                                </div><br />
                                <div className="font-semibold">
                                    2. ĐỊA ĐIỂM ĐỔI HÀNG
                                </div><br />
                                <div className="font-normal text-base">
                                    Áp dụng tại tất cả các cửa hàng trên toàn hệ thống của IVY moda và <span className="font-"> Hệ thống Kho hàng
                                        Online của IVY moda.</span>
                                </div><br />
                                <div className="font-semibold">
                                    3. ĐIỀU KIỆN ĐỔI TRẢ
                                </div><br />
                                <div className="font-normal text-base">
                                    - Hàng đổi phải còn nguyên nhãn mác, mã vạch, chưa qua sử dụng và có hóa đơn mua hàng
                                    nguyên vẹn kèm theo (bao gồm cả
                                    các sản phẩm chất liệu thun/len/thun len, jeans).
                                </div><br />
                                <div className="font-normal text-base">
                                    - Với các trường hợp đổi trả không có hóa đơn, Quý khách vui lòng quay lại showroom đã
                                    mua hàng để được hỗ trợ.
                                </div><br />
                                <div>
                                    - Đơn hàng chỉ được đổi 01 lần theo đúng quy định.
                                </div><br />
                                <div>
                                    - Giá trị sản phẩm đổi/trả được tính theo đơn giá trên hóa đơn mua hàng.
                                </div><br />
                                <div>
                                    - IVY moda chỉ sử dụng “Biên lai đặt cọc” để hoàn lại tiền thừa sau khi đổi và giá trị
                                    hàng trả cho khách, không hoàn
                                    tiền mặt trong mọi trường hợp.
                                </div><br />
                                <div>
                                    - Nếu lỗi do nhà sản xuất, IVY sẽ chịu hoàn toàn phí ship đổi trả sản phẩm
                                </div><br />
                                <div className="font-semibold">
                                    4. CÁC TRƯỜNG HỢP TỪ CHỐI ĐỔI TRẢ
                                </div><br />
                                <div>
                                    - Sản phẩm nằm trong chương trình đồng giá, giảm giá trên 50%
                                </div><br />
                                <div>
                                    - Thời gian mua hàng quá 15 ngày.
                                </div><br />
                                <div>
                                    - Nhãn mác, mã vạch không còn nguyên vẹn.
                                </div><br />
                                <div>
                                    - Sản phẩm đã chỉnh sửa, đã qua sử dụng (bị bẩn, rách, hỏng, rút sợi, phai màu, có mùi
                                    hôi, mùi hóa chất khác thường)
                                    hoặc bị lỗi do những tác động bên ngoài sau khi mua, hoặc các phụ kiện/chi tiết gắn liền
                                    của sản phẩm không còn đầy
                                    đủ/hư hại.
                                </div><br />
                                <div>
                                    - Sản phẩm mang nhãn IVY Secret, áo quây, áo 2 dây, các loại phụ kiện (túi xách, giày,
                                    thắt lưng…)…
                                </div><br />
                                <div className="font-semibold">
                                    5. HƯỚNG DẪN ĐỔI HÀNG ONLINE
                                </div><br />
                                <div className="font-semibold">
                                    Cách 1: Đổi hàng tại kho của IVY moda.
                                </div><br />
                                <div className="font-semibold">
                                    1. Khách hàng gửi hàng về kho với nội dung và địa chỉ:
                                </div><br />
                                <div>
                                    <strong>
                                        Nội dung ghi trên đơn hàng gửi:
                                    </strong>
                                    Đổi Size/ Màu/ Mẫu/ Lỗi – Mã IVM 123xxx – Mã sản phẩm sang Size/ Màu/ Mã sản phẩm. (Ví
                                    dụ: Đổi Mẫu – IVM 1234567 –
                                    17E1234 sang 22E1234 size L màu xanh)
                                </div><br />
                                <div className="font-semibold">
                                    Khách ở Khu vực Miền Bắc và Miền Trung gửi về:
                                </div><br />
                                <div className="ml-14">
                                    Người nhận: Kho Online – Mã nhân viên hỗ trợ
                                </div><br />
                                <div className="ml-14">
                                    SĐT: 024.2246.4869
                                </div><br />
                                <div className="ml-14">
                                    Địa chỉ: Số 126 Lê Trọng Tấn, La Khê, Hà Đông, TP. Hà Nội
                                </div><br />
                                <div className="font-semibold">
                                    Khách ở Khu vực Miền Nam gửi về:
                                </div><br />
                                <div className="ml-14">
                                    Người nhận: Kho Online – Mã nhân viên hỗ trợ
                                </div><br />
                                <div className="ml-14">
                                    SĐT: 0366.463.606
                                </div><br />
                                <div className="ml-14">
                                    Địa chỉ: Cổng số 4, kho TTC Đặng Huỳnh, đường số 10, KCN Sóng Thần 1, Dĩ An, Bình Dương
                                </div><br />
                                <div>
                                    <strong>
                                        *** Lưu ý:
                                    </strong>
                                    Đối với đơn hàng đổi do lỗi phát sinh từ nhà sản xuất IVY moda như: Sản phẩm lỗi; Giao
                                    nhầm sản phẩm;… IVY moda hỗ trợ
                                    toàn bộ phí ship vận chuyển. Khi gửi hàng, khách hàng vui lòng báo bên vận chuyển người
                                    nhận chịu phí ship.
                                </div><br />
                                <div className="font-semibold">
                                    2. IVY moda xử lý đơn hàng đổi:
                                </div><br />
                                <div>
                                    Khi nhận được hàng gửi, IVY moda sẽ kiểm tra và gọi điện thông báo, xác nhận yêu cầu Đổi
                                    hàng và gửi lại hàng cho khách
                                    trong vòng từ 1 đến 3 ngày làm việc.
                                </div><br />
                                <div className="font-semibold">
                                    3. KH cần hỗ trợ vui lòng liên hệ:
                                </div><br />
                                <div className="font-semibold">
                                    Số Hotline: 0246.662.3434
                                </div><br />
                                <div>
                                    - Để khiếu nại về chất lượng sản phẩm, dịch vụ và các vấn đề khác: <strong>Ấn phím 1</strong>
                                </div><br />
                                <div>
                                    - Để hỗ trợ về các đơn hàng mua Online: <strong>Ấn phím 1</strong>
                                </div><br />
                                <div>
                                    - Để được tư vấn mua hàng Online: <strong>Ấn phím 3</strong>
                                </div><br />
                                <div>
                                    Hoặc gửi yêu cầu qua email: cskhonline@ivy.com.vn (https://ivymoda.com/lien-he), KH cung cấp mã đơn hàng và vấn đề cần
                                    xử lý.
                                </div><br />
                                <div>
                                    Nhân viên phụ trách sẽ liên hệ qua số điện thoại đặt hàng hoặc Add Zalo của khách hàng (trong giờ hành chính) để hỗ trợ
                                    xử lý
                                </div><br />
                                <div className="font-semibold">
                                    Cách 2: Đổi hàng tại Hệ thống cửa hàng của IVY moda
                                </div><br />
                                <div className="font-semibold">
                                    1. Khách hàng đến cửa hàng IVY moda gần nhất.
                                </div><br />
                                <div>
                                    Hệ thống của hàng của IVY moda: https://ivymoda.com/page/cuahang
                                </div><br />
                                <div className="font-semibold">
                                    2. Yêu cầu khi đổi hàng.
                                </div><br />
                                <div>
                                    KH cần mang hóa đơn và sản phẩm đổi còn nguyên tem mác đến trực tiếp cửa hàng IVY moda để đổi size/ màu/ mẫu trong vòng
                                    5 ngày kể từ ngày nhận hàng.
                                </div><br />
                                <div className="font-semibold">
                                    Cảm ơn bạn đã yêu thích sản phẩm và đồng hành cùng IVY moda! Mọi thắc mắc liên quan đến chính sách đổi hàng, vui lòng
                                    liên hệ 0246.662.3434
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
                </article >
                <Footer />
            </div >
        </>
    );
}

export default Chinh_sach_doi_tra;