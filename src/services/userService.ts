import axios from "axios";
import { Login } from "../types/users";
import axiosInstance from "./axiosInstance";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data: Login) => {
    const res = await axiosInstance.post("/api/auth/login", data);
    return res.data;
};
export const register = async (formData: FormData) => {
    const response = await axiosInstance.post("/api/auth/register", formData);
    return response.data;
};