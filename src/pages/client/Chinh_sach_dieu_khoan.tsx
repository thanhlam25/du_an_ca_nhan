import React from "react";
import HeaderClient from "../../layouts/clientHeader";
import Footer from "../../components/clientFooter";
import MenuClient from "../../layouts/clientMenu";

const ChinhSachDieuKhoan = () => {
    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                {/* Thanh menu */}
                <MenuClient />
                <div className="flex gap-4 mb-[20px] mt-[90px] ">
                    <div className="text-sm">Trang chủ</div>
                    <div className="text-sm">-</div>
                    <div className="text-sm">Chính sách điều khoản</div>
                </div>
                <img src="./public/images/banner-dieu-khoan.png" className="py-8" alt="" />
                <div className="grid grid-cols-[1fr_2fr] gap-10 justify-center mt-8">
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
                        <h1 className="text-2xl font-semibold">CHÍNH SÁCH ĐIỀU KHOẢN SỬ DỤNG</h1>
                        <br />

                        <h2 className="text-lg font-semibold">
                            1. IVYMODA.COM LÀ WEBSITE CỦA THƯƠNG HIỆU THỜI TRANG IVY MODA
                        </h2>
                        <br />
                        <p className="text-sm text-gray-600">
                            IVYmoda.com là kênh mua sắm và hỗ trợ đắc lực công tác chăm sóc khách hàng của thương hiệu thời trang IVY Moda.
                            Kể từ khi ra mắt vào cuối năm 2021, IVYmoda.com đã không ngừng cải tiến và nâng cấp để hoàn thiện tính năng.
                        </p>
                        <br />

                        <h2 className="text-lg font-semibold">2. CHÍNH SÁCH THẺ THÀNH VIÊN ONLINE</h2>
                        <br />
                        <h3 className="text-base font-semibold">2.1 THẺ BẠC / SILVER</h3>
                        <br />

                        <h4 className="text-lg font-semibold">ĐIỀU KIỆN</h4>
                        <br />
                        <p className="text-sm text-gray-600">
                            Khách hàng có tổng giá trị hóa đơn từ: 12.000.000 VNĐ trong 01 năm kể từ ngày bắt đầu sử dụng thẻ Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 12.000.000 VNĐ trong 01 năm tiếp theo sử dụng thẻ Điều kiện nâng hạng thẻ VÀNG/GOLD MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 23.000.00 VNĐ kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP

                        </p>
                        <br />

                        <h4 className="text-lg font-semibold">QUYỀN LỢI</h4>
                        <br />
                        <p className="text-sm text-gray-600">
                            Giảm 10% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt. Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty - Spa, Nhà hàng, Tạp chí…
                        </p>
                        <br />

                        <h3 className="text-base font-semibold">2.2 THẺ VÀNG / GOLD</h3>
                        <br />
                        <h4 className="text-lg font-semibold">ĐIỀU KIỆN</h4>
                        <br />
                        <p className="text-sm text-gray-600">
                            Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm Hoặc Khách hàng có tổng giá trị mua hàng từ: 23.000.000 VNĐ trong vòng 01 năm kể từ ngày đạt hạng thẻ BẠC/SILVER MEMBERSHIP Điều kiện gia hạn thẻ: Khách hàng có tổng giá trị mua hàng từ 35.000.000 VNĐ trong 01 năm tiếp theo sử dụng thẻ Điều kiện nâng hạng thẻ KIM CƯƠNG/DIAMOND MEMBERSHIP: Khách hàng có tổng giá trị mua hàng từ 25.000.000 VNĐ trong 01 năm kể từ ngày đạt hạng thẻ VÀNG/GOLD MEMBERSHIP
                        </p>
                        <br />

                        <h4 className="text-lg font-semibold">QUYỀN LỢI</h4>
                        <br />
                        <p className="text-sm text-gray-600">
                            Giảm 20% khi mua hàng tại hệ thống IVY moda trong vòng 01 năm kể từ ngày đạt hạng thẻ Nhận quà tặng sinh nhật của khách hàng, kèm theo những chính sách ưu đãi dành riêng cho khách hàng VIP vào các dịp lễ đặc biệt. Khách hàng sẽ được nhận thêm các ưu đãi hấp dẫn từ các đối tác của IVY Moda trong các lĩnh vực: Mỹ Phẩm, Nước hoa, Trang sức, Beauty – Spa, Nhà hàng, Tạp chí…
                        </p>
                        <br />

                        <h2 className="text-lg font-semibold">3. ĐIỀU KHOẢN SỬ DỤNG THẺ THÀNH VIÊN ONLINE</h2>
                        <br />
                        <p className="text-sm text-gray-600">
                            Thẻ có giá trị duy nhất đối với chủ thẻ. Không được phép sang nhượng hay cho mượn thẻ dưới mọi hình
                            thức;

                            Vui lòng xuất trình thẻ khi thanh toán để tích lũy điểm và áp dụng chiết khấu của thẻ

                            Chiết khấu thẻ chỉ được áp dụng với hàng nguyên giá;

                            Điểm tích lũy của chủ thẻ (tương ứng với giá trị mua hàng) sẽ được quy đổi thành các phần quà có giá
                            trị, duy trì và
                            nâng hạng thẻ;

                            Thẻ có giá trị sử dụng trong vòng 01 năm kể từ ngày đăng ký, đạt hạng thẻ, gia hạn hoặc nâng hạng thẻ;

                            Thẻ được áp được áp dụng cho tất cả hình thức mua hàng tại cửa hàng và mua hàng online, không bao gồm
                            các đại lý;

                            Thẻ này do IVY moda phát hành và là tài sản của IVY moda. IVY moda có quyền từ chối sử dụng, tạm khóa,
                            đình chỉ thẻ
                            trong một số trường hợp mà không cần báo trước tới khách hàng.
                            Việc Khách Hàng truy cập hoặc thực hiện giao dịch trên Website: ivymoda.com và Ứng dụng di động của IVY
                            moda được hiểu
                            là Khách Hàng đã đọc, hiểu và đồng ý tuân thủ Chính Sách và Điều khoản sử dụng thẻ thành viên (”Chính
                            sách và Điều
                            khoản“), kể cả các phiên bản sửa đổi, bổ sung của Chính Sách và Điều khoản. Phiên bản sửa đổi, bổ sung
                            Chính Sách và
                            Điều khoản này (nếu có) sẽ có hiệu lực ngay khi được cập nhật chính thức trên Website và Ứng dụng và
                            không cần phải
                            thông báo trước, khi Khách Hàng truy cập và thực hiện giao dịch với IVY moda sau khi thay đổi Chính sách
                            và Điều Khoản
                            mới có hiệu lực, có nghĩa là Khách Hàng chấp nhận với những thay đổi đó. Một lần nữa, IVY moda lưu ý:
                            Khách Hàng vui
                            lòng cập nhật thường xuyên hoặc đọc kỹ lại Chính sách và Điều khoản trước khi thực hiện giao dịch.
                        </p>
                        <br />

                        <h2 className="text-lg font-semibold">4. CHÍNH SÁCH BẢO MẬT VÀ CHIA SẺ THÔNG TIN</h2>
                        <br />
                        <h3 className="text-base font-semibold">4.1. MỤC ĐÍCH ÁP DỤNG</h3>
                        <br />
                        <p className="text-sm text-gray-600">
                            Khi Khách Hàng thực hiện giao dịch và/hoặc đăng ký mở tài khoản tại Website và Ứng dụng, tùy từng thời
                            điểm, Khách Hàng
                            phải cung cấp một số thông tin cần thiết cho việc thực hiện giao dịch và/hoặc đăng ký tài khoản (“Thông
                            Tin Khách
                            Hàng”).

                            Khách Hàng có trách nhiệm đảm bảo những thông tin Khách Hàng cung cấp là đầy đủ và chính xác và luôn cập
                            nhật thông tin
                            để đảm bảo tính đầy đủ và chính xác. IVY moda không chịu trách nhiệm giải quyết bất kỳ tranh chấp nào
                            nếu thông tin
                            Khách Hàng cung cấp không chính xác hoặc không được cập nhật hoặc giả mạo.
                        </p>
                        <br />

                        <h3 className="text-base font-semibold">4.2.2. Về việc lưu giữ và bảo mật thông tin riêng</h3>
                        <br />
                        <p className="text-sm text-gray-600">
                            Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và IVY moda, đều được lưu giữ và
                            bảo mật bởi hệ
                            thống của IVY moda, riêng thông tin thẻ thanh toán của Khách Hàng sẽ do các đối tác Cổng thanh toán của
                            IVY moda bảo mật
                            theo tiêu chuẩn quốc tế.

                            IVY moda có các biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn việc truy cập, sử dụng trái phép
                            Thông Tin Khách
                            Hàng. IVY moda cũng thường xuyên phối hợp với các chuyên gia bảo mật nhằm cập nhật những thông tin mới
                            nhất về an ninh
                            mạng để đảm bảo sự an toàn cho Thông Tin Khách Hàng khi Khách Hàng truy cập, đăng ký mở tài khoản, sử
                            dụng các tính năng
                            của Website và Ứng dụng. Khi thu thập dữ liệu, IVY moda thực hiện lưu giữ và bảo mật Thông Tin Khách
                            Hàng tại hệ thống
                            máy chủ và các Thông Tin Khách Hàng này được bảo đảm an toàn bằng các hệ thống tường lửa (firewall), các
                            biện pháp kiểm
                            soát truy cập, mã hóa dữ liệu.

                            Các thông tin thẻ thanh toán của Khách Hàng được các đối tác cổng thanh toán của IVY moda bảo vệ theo
                            tiêu chuẩn quốc
                            tế. IVY moda không cho phép các bên thứ ba theo dõi hoặc thu thập thông tin của Khách Hàng trên Website
                            và Ứng dụng của
                            IVY moda.

                            Đối với các tài khoản đã đóng chúng tôi vẫn lưu trữ Thông Tin Cá Nhân và truy cập của Khách Hàng để phục
                            vụ cho các mục
                            đích phòng chống gian lận, điều tra, giải đáp thắc mắc…

                            Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái phép
                            vào hệ thống hay
                            làm thay đổi cấu trúc dữ liệu của IVY moda, cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho
                            các hoạt động với
                            mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống IVY moda, cũng như các các hành vi mà
                            pháp luật Việt
                            Nam nghiêm cấm. Trong trường hợp IVY moda phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận,
                            phát tán các thông
                            tin trái phép,…IVY moda có quyền chuyển Thông Tin Cá Nhân của Khách Hàng cho các cơ quan có thẩm quyền
                            để xử lý theo quy
                            định pháp luật.
                        </p>
                        <br />
                        <div className="text-base font-semibold">
                            4.2.3. Về việc sử dụng Thông Tin Khách Hàng
                        </div>
                        <br />
                        <div className="font-xs text-[#6c757d]">
                            IVY moda có quyền sử dụng các thông tin Khách Hàng cung cấp, bao gồm nhưng không giới hạn ở Thông Tin
                            Khách Hàng để:

                            Cung cấp các dịch vụ/tiện ích cho Khách Hàng dựa trên nhu cầu và các thói quen của Khách Hàng khi truy
                            cập vào Website
                            và Ứng dụng;

                            Gửi các thông báo, trao đổi thông tin giữa Khách Hàng với IVY moda qua Website và Ứng dụng, hoặc ngược
                            lại;

                            Phát hiện, ngăn chặn các hoạt động giả mạo, phá hoại tài khoản của Khách Hàng hoặc các hoạt động giả mạo
                            nhận dạng của
                            Khách Hàng trên Website và Ứng dụng;

                            Liên lạc, hỗ trợ liên lạc và giải quyết với Khách Hàng trong những trường hợp đặc biệt.
                        </div><br />
                        <div className="text-base font-semibold">
                            4.2.4. Về việc liên kết với các website khác
                        </div><br />
                        <div className="font-xs text-[#6c757d]">
                            Khách Hàng có trách nhiệm bảo vệ thông tin tài khoản của mình và không cung cấp bất kỳ thông tin nào
                            liên quan đến tài
                            khoản và mật khẩu truy cập trên Website và Ứng dụng của IVY moda trên các website khác ngoại trừ khi
                            đăng nhập vào địa
                            chỉ chính thức của IVY moda tại ivymoda.com và Ứng dụng di dộng IVY moda;

                            Cung cấp các dịch vụ/tiện ích cho Khách Hàng dựa trên nhu cầu và các thói quen của Khách Hàng khi truy
                            cập vào Website
                            và Ứng dụng;

                            Ngoài các trường hợp nêu trên, IVY moda sẽ có thông báo cụ thể cho Khách Hàng khi phải tiết lộ Thông Tin
                            Khách Hàng cho
                            một bên thứ ba. Trong trường hợp này, IVY moda cam kết sẽ chỉ tiết lộ Thông Tin Khách Hàng khi được sự
                            đồng ý của Khách
                            Hàng;

                            IVY moda có thể chia sẻ Thông Tin Khách Hàng cho các mục đích sau:
                            - Nghiên cứu thị trường và các báo cáo phân tích: IVY moda có thể dùng Thông Tin Khách Hàng để nghiên
                            cứu thị trường,
                            tổng hợp, phân tích thông tin chung của Khách Hàng (ví dụ: độ tuổi trung bình, khu vực địa lý…), thông
                            tin chi tiết sẽ
                            được ẩn và chỉ được dùng để phục vụ công việc thống kê. Trong trường hợp IVY moda tiến hành khảo sát cần
                            sự tham gia của
                            Khách Hàng, bất kỳ câu trả lời cho khảo sát hoặc thăm dò dư luận mà Khách Hàng cung cấp cho IVY moda sẽ
                            không được
                            chuyển cho bất kỳ bên thứ ba nào;
                            - Trao đổi Thông Tin Khách Hàng với các bên thứ ba là đối tác, đại lý của IVY moda: IVY moda có thể
                            chuyển Thông Tin
                            Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị và hỗ trợ dịch vụ khách
                            hàng. IVY moda cũng
                            có thể trao đổi Thông Tin Khách Hàng với bên thứ ba cho mục đích chống gian lận và giảm rủi ro tín dụng.
                        </div><br />
                        <div className="text-base font-semibold">
                            4.2.6. Sử dụng Cookie
                        </div><br />
                        <div className="font-xs text-[#6c757d]">
                            IVY moda cung cấp các tập tin cookie hoặc các công nghệ tương tự, nhằm thu thập các thông tin như: lịch
                            sử truy cập, các
                            lựa chọn của Khách Hàng khi truy cập và sử dụng tính năng của Website và Ứng dụng... nhằm tăng trải
                            nghiệm bảo mật và
                            giúp IVY moda hiểu rõ nhu cầu, sở thích của Khách Hàng để có thể cung cấp dịch vụ tốt hơn.
                        </div><br />
                        <h3 className="text-base font-semibold">4.2.7. Liên hệ, giải đáp thắc mắc</h3>
                        <br />
                        <p className="text-sm text-gray-600">
                            Bất kỳ khi nào Khách Hàng cần hỗ trợ, hãy gọi đến số hotline của IVY moda: 090 589 8683 hoặc gửi email
                            đến địa chỉ: <a href="mailto:cskh@ivy.com.vn" className="text-blue-500">cskh@ivy.com.vn</a>
                        </p>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );
};

export default ChinhSachDieuKhoan;
