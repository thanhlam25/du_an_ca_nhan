export interface User {
    email: string,
    password: string,
}
export type Login = Pick<{ email: string; password: string }, 'email' | 'password'>;


export interface RegisterForm {
    _id: string,
    first_name: string; // Họ, tối thiểu 6 ký tự
    name: string; // Tên đầy đủ, tối thiểu 3 ký tự
    email: string; // Định dạng email hợp lệ
    phone: string; // Chỉ chứa số, 10-11 ký tự
    date: string; // Ngày sinh (yyyy-mm-dd)
    sex: number; // 0: Nữ, 1: Nam
    city: string; // Tỉnh/Thành phố
    district: string; // Quận/Huyện
    commune: string; // Phường/Xã
    address: string; // Địa chỉ, tối thiểu 5 ký tự
    password: string; // Mật khẩu, tối thiểu 6 ký tự
    confirmPassword: string; // Phải trùng với password
}

export type Register = Omit<RegisterForm, 'id'>;
export type UserId = Pick<RegisterForm, '_id'>;


