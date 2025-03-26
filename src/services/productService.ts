import { DeleteProductParams } from "../types/products";
import axiosInstance from "./axiosInstance";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllProduct = async ({ endpoint }: { endpoint: string }) => {
        const response = await axiosInstance.get(`${endpoint}`);
        return response.data
};

export const deleteProduct = async ({id,endpoint}:DeleteProductParams) => {
    const response = await axiosInstance.delete(`/admin/${endpoint}/${id}`);
    return response.data;
};

export const getById = async ({ namespace, endpoint, id }: { namespace: string; endpoint: string; id: string }) => {
    try {
        const baseUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, ''); // Loại bỏ dấu / ở cuối nếu có
        const url = `${baseUrl}/products/${id}`;
        
        console.log('Request URL:', url); // Debug log

        const response = await axiosInstance.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        console.log('API Response:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error in getById:', error.response?.data || error);
        throw error;
    }
};

export const updateProduct = async (id: string, data: any) => {
    try {
        const baseUrl = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
        const url = `${baseUrl}/admin/products/update/${id}`;
        
        console.log('Update URL:', url);
        console.log('Update Data:', data);

        const token = localStorage.getItem('accessToken');
        if (!token) {
            throw new Error('No authentication token found');
        }

        const requestData = {
            ...data,
            _id: id,
            updatedAt: new Date().toISOString()
        };

        const response = await axiosInstance.put(
            url,
            requestData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log('Update response:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Update error details:', {
            url: error.config?.url,
            requestData: error.config?.data,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        throw error;
    }
};

