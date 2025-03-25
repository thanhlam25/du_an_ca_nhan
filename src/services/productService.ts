import axiosInstance from "./axiosInstance"; // Import axiosInstance
import { IProduct } from "../types/products";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (endpoint: string): Promise<IProduct[]> => {
    try {
        const res = await axiosInstance.get<{ docs: IProduct[] }>(`${API_URL}/api/${endpoint}`);
        return res.data.docs || [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
export const getProductById = async (id: string): Promise<IProduct | null> => {
    try {
        const res = await axiosInstance.get<IProduct>(`${API_URL}/api/products/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
};

