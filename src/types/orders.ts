export interface CartItem {
    userId: string;    // ID của user đang đăng nhập
    productId: string; // ID của sản phẩm
    size: string;      // Size đã chọn
    quantity: number;  // Số lượng
}