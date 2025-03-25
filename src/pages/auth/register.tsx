import React, { useEffect, useState } from "react";
import HeaderClient from "../../layouts/clientHeader";
import MenuClient from "../../layouts/clientMenu";
import Footer from "../../layouts/clientFooter";
import axios, { AxiosError } from "axios";
import { City, District, Ward } from "../../types/city";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterForm } from "../../types/users";
import { register } from "../../services/userService";

const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string) => {
    return /^(0[2-9])+([0-9]{8})$/.test(phone);
};

const Register = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [firstName, setFirstName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [sex, setSex] = useState<string>("1"); // Đồng bộ với BE: 0: Nữ, 1: Nam
    const [date, setDate] = useState<string>(""); // Ngày sinh
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [cities, setCities] = useState<City[]>([]); // Sửa tên biến
    const [districts, setDistricts] = useState<District[]>([]); // Sửa tên biến
    const [wards, setWards] = useState<Ward[]>([]); // Sửa tên biến
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [selectedWard, setSelectedWard] = useState<string>("");

    interface ErrorResponse {
        errors?: string[];
    }
    const getUser = async ()=>{
        const res = await axios.get(`http://localhost:3000/users`)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
                );
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const mutation = useMutation<RegisterForm, AxiosError<ErrorResponse>, FormData>({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/login");
        },
        onError: (error) => {
            const errorData = error.response?.data;
            console.error("Lỗi từ server:", errorData);
            if (errorData?.errors) {
                alert("Lỗi validation: " + errorData.errors.join(", "));
            } else {
                alert("Có lỗi xảy ra khi đăng ký!");
            }
        },
    });

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        if (!e.target.value) setNameError("Vui lòng nhập họ!");
        else if (e.target.value.length < 6) setNameError("Họ phải dài ít nhất 6 ký tự!");
        else setNameError(null);
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (!e.target.value) setNameError("Vui lòng nhập tên!");
        else setNameError(null);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) setEmailError("Email không hợp lệ!");
        else setEmailError(null);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        if (!validatePhone(e.target.value)) setPhoneError("Số điện thoại không hợp lệ!");
        else setPhoneError(null);
    };

    const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSex(e.target.value);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value); // Sửa từ birthdate thành date
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 6) {
            setPasswordError("Mật khẩu phải có ít nhất 6 ký tự!");
        } else if (confirmPassword && value !== confirmPassword) {
            setPasswordError("Mật khẩu nhập lại không khớp!");
        } else {
            setPasswordError(null);
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (password && value !== password) {
            setPasswordError("Mật khẩu nhập lại không khớp!");
        } else {
            setPasswordError(null);
        }
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = event.target.value;
        setSelectedCity(cityId);
        setSelectedDistrict("");
        setSelectedWard("");
        setDistricts([]);
        setWards([]);
        const selected = cities.find((city) => city.Id === cityId);
        if (selected) setDistricts(selected.Districts);
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const districtId = event.target.value;
        setSelectedDistrict(districtId);
        setSelectedWard("");
        setWards([]);
        const selectedCityData = cities.find((city) => city.Id === selectedCity);
        if (selectedCityData) {
            const selectedDistrictData = selectedCityData.Districts.find(
                (district) => district.Id === districtId
            );
            if (selectedDistrictData) setWards(selectedDistrictData.Wards);
        }
    };

    const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWard(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        if (!firstName || !name) {
            setNameError("Vui lòng nhập đầy đủ họ và tên!");
            valid = false;
        }
        if (firstName.length < 6) {
            setNameError("Họ phải dài ít nhất 6 ký tự!");
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailError("Email không hợp lệ!");
            valid = false;
        }
        if (!validatePhone(phone)) {
            setPhoneError("Số điện thoại không hợp lệ!");
            valid = false;
        }
        if (!date) {
            alert("Vui lòng chọn ngày sinh!");
            valid = false;
        }
        if (!selectedCity || !selectedDistrict || !selectedWard || !address) {
            alert("Vui lòng nhập đầy đủ địa chỉ!");
            valid = false;
        }
        if (!password || password.length < 6) {
            setPasswordError("Mật khẩu phải có ít nhất 6 ký tự!");
            valid = false;
        }
        if (password !== confirmPassword) {
            setPasswordError("Mật khẩu nhập lại không khớp!");
            valid = false;
        }

        if (!valid) return;

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("date", date);
        formData.append("sex", sex); // 0 hoặc 1 theo schema BE
        formData.append("city", cities.find((c) => c.Id === selectedCity)?.Name || "");
        formData.append("district", districts.find((d) => d.Id === selectedDistrict)?.Name || "");
        formData.append("commune", wards.find((w) => w.Id === selectedWard)?.Name || "");
        formData.append("address", address);
        formData.append("password", password);

        mutation.mutate(formData);
    };

    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                <MenuClient />
                <article className="mt-[82px]">
                    <div className="flex justify-center">
                        <p className="font-semibold text-2xl pt-4">ĐĂNG KÝ</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <p className="font-[500] text-[1rem] py-4">Thông tin khách hàng</p>
                            <form onSubmit={handleSubmit} id="registerForm" className="leading-[40px]">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p>Họ: <span className="text-red-500">*</span></p>
                                        <input
                                            type="text"
                                            placeholder="Họ.."
                                            className="border w-full h-14 p-4"
                                            value={firstName}
                                            onChange={handleFirstName}
                                            required
                                        />
                                        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                                    </div>
                                    <div>
                                        <p>Tên: <span className="text-red-500">*</span></p>
                                        <input
                                            type="text"
                                            placeholder="Tên.."
                                            className="border w-full h-14 p-4"
                                            value={name}
                                            onChange={handleName}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p>Email: <span className="text-red-500">*</span></p>
                                        <input
                                            type="email"
                                            placeholder="Email.."
                                            className="border w-full h-14 p-4"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                    </div>
                                    <div>
                                        <p>Điện thoại: <span className="text-red-500">*</span></p>
                                        <input
                                            type="text"
                                            placeholder="Điện thoại.."
                                            className="border w-full h-14 p-4"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            required
                                        />
                                        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p>Ngày sinh: <span className="text-red-500">*</span></p>
                                        <input
                                            type="date"
                                            className="border w-full h-14 p-4"
                                            value={date}
                                            onChange={handleDateChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Giới tính: <span className="text-red-500">*</span></p>
                                        <select
                                            className="border w-full h-14 p-4"
                                            value={sex}
                                            onChange={handleSexChange}
                                        >
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p>Tỉnh/TP: <span className="text-red-500">*</span></p>
                                        <select
                                            className="border w-full h-14 p-4"
                                            value={selectedCity}
                                            onChange={handleCityChange}
                                            required
                                        >
                                            <option value="">Chọn tỉnh/thành phố</option>
                                            {cities.map((city) => (
                                                <option key={city.Id} value={city.Id}>
                                                    {city.Name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <p>Quận/Huyện: <span className="text-red-500">*</span></p>
                                        <select
                                            className="border w-full h-14 p-4"
                                            value={selectedDistrict}
                                            onChange={handleDistrictChange}
                                            disabled={!selectedCity}
                                            required
                                        >
                                            <option value="">Chọn quận/huyện</option>
                                            {districts.map((district) => (
                                                <option key={district.Id} value={district.Id}>
                                                    {district.Name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <p>Phường/Xã: <span className="text-red-500">*</span></p>
                                    <select
                                        className="border w-full h-14 p-4"
                                        value={selectedWard}
                                        onChange={handleWardChange}
                                        disabled={!selectedDistrict}
                                        required
                                    >
                                        <option value="">Chọn phường/xã</option>
                                        {wards.map((ward) => (
                                            <option key={ward.Id} value={ward.Id}>
                                                {ward.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <p>Địa chỉ: <span className="text-red-500">*</span></p>
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ.."
                                        className="border w-full h-14 p-4"
                                        value={address}
                                        onChange={handleAddressChange}
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col leading-[37px]">
                            <p className="font-[500] text-[1rem] py-4">Thông tin mật khẩu</p>
                            <div>
                                <p>Mật khẩu: <span className="text-red-500">*</span></p>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu.."
                                    className="border w-full h-14 p-4"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <div>
                                <p>Nhập lại mật khẩu: <span className="text-red-500">*</span></p>
                                <input
                                    type="password"
                                    placeholder="Nhập lại mật khẩu.."
                                    className="border w-full h-14 p-4"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-[14px]">
                                    Đồng ý với các <a href="#" className="text-red-500">điều khoản</a> của IVY
                                </p>
                            </div>
                            <div className="flex items-center mt-4">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-[14px]">Đăng ký nhận bản tin</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="border border-black text-white font-semibold text-lg bg-black w-full p-3 rounded-br-2xl rounded-tl-2xl cursor-pointer hover:bg-white hover:text-black"
                                    type="submit"
                                    form="registerForm"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? "Đang đăng ký" : "Đăng ký"}
                                </button>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="border border-black text-black font-semibold text-lg bg-white w-full p-3 mt-4 block text-center rounded-br-2xl rounded-tl-2xl hover:bg-black hover:text-white"
                                >
                                    Quay lại trang đăng nhập
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
};

export default Register;