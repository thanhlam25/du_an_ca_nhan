import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/userService";
import HeaderClient from "../../layouts/clientHeader";
import MenuClient from "../../layouts/clientMenu";
import Footer from "../../components/clientFooter";
import { Login as LoginType } from "../../types/users";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState<LoginType>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            toast.success("Đăng nhập thành công!", {
                position: "top-right",
                autoClose: 2000,
            });

            queryClient.invalidateQueries({ queryKey: ["user"] });

            setTimeout(() => {
                navigate("/");
            }, 2000);
        },
        onError: (err) => {
            if (axios.isAxiosError(err) && err.response) {
                const errorData = err.response.data as { errors?: string[] };
                const errorMessage = errorData.errors?.[0] || "Đăng nhập thất bại!";
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 3000,
                });

                setErrors({
                    email: errorMessage.includes("email") ? errorMessage : "",
                    password: errorMessage.includes("mật khẩu") ? errorMessage : "",
                });
            } else {
                toast.error("Có lỗi xảy ra. Vui lòng kiểm tra kết nối!", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setFormData({ email: "", password: "" });
            setErrors({});
        }
    }, [isSuccess]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { email?: string; password?: string } = {};
        if (!formData.email) newErrors.email = "Vui lòng nhập email!";
        if (!formData.password) newErrors.password = "Vui lòng nhập mật khẩu!";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            mutate(formData);
        }
    };

    return (
        <>
            <HeaderClient />
            <div className="mx-[5%]">
                <MenuClient />
                <article className="mt-[82px]">
                    <div className="grid grid-cols-[1fr_0.3fr_1fr]">
                        <form onSubmit={handleSubmit} id="loginForm">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold text-xl py-4">Bạn đã có tài khoản IVY</p>

                                <p className="text-[14px] text-gray-500 mb-5 text-center">
                                    Nếu bạn đã có tài khoản, hãy đăng nhập để tích luỹ điểm thành viên và nhận được những ưu đãi tốt hơn!
                                </p>

                                {/* Email Input */}
                                <div className="w-[80%] mb-4">
                                    <div className="border h-11 flex items-center p-4 relative">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="text-[14px] outline-none w-full border-0 focus:outline-none focus:ring-0"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Password Input */}
                                <div className="w-[80%] mb-4">
                                    <div className="border h-11 flex items-center p-4 relative">
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Mật khẩu"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="text-[14px] outline-none w-full border-0 focus:outline-none focus:ring-0"
                                        />
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>

                                <div className="flex justify-between items-center my-4 w-[80%]">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <p className="text-[14px]">Ghi nhớ đăng nhập</p>
                                    </div>
                                    <p className="underline text-[14px] cursor-pointer hover:text-orange-600">Quên mật khẩu?</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`text-white font-semibold text-lg bg-black w-[80%] p-3 h-[50px] text-center rounded-br-2xl border border-black rounded-tl-2xl my-8 hover:bg-white hover:border hover:border-black hover:text-black cursor-pointer transition-all duration-300 ${isPending ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center">
                            <div className="w-[1px] h-full bg-gray-300"></div>
                        </div>
                        <div className="flex flex-col items-center px-10">
                            <p className="font-semibold text-xl py-4">Khách hàng mới của IVY moda</p>
                            <p className="text-gray-500 text-center text-[14px] mb-2">
                                Nếu bạn chưa có tài khoản, hãy đăng ký ngay để trải nghiệm mua sắm tốt hơn!
                            </p>
                            <a
                                className="text-white font-semibold h-[50px] border border-black text-lg bg-black w-[100%] p-3 flex justify-center items-center rounded-br-2xl rounded-tl-2xl my-8 hover:bg-white hover:border hover:border-black hover:text-black transition-all duration-300"
                                href="/register"
                            >
                                Đăng ký
                            </a>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        </>
    );
};

export default Login;
