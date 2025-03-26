import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getById, updateProduct } from '../../services/productService';
import { toast } from 'react-toastify';
import AdminHeader from '../../layouts/adminHeader';
import AdminMenu from '../../layouts/adminMenu';
import AdminFooter from '../../layouts/adminFooter';
import { EditProductForm } from '../../types/products';




const EditProduct = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<EditProductForm>({
        name: '',
        sku: '',
        colors: []
    });

    useEffect(() => {
        if (!productId) {
            toast.error('Không tìm thấy sản phẩm');
            navigate('/admin/products');
        }
    }, [productId, navigate]);

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getById({ 
            namespace: "products",
            endpoint: "products", 
            id: productId! 
        }),
        enabled: !!productId,
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                sku: product.sku,
                colors: product.colors || []
            });
        }
    }, [product]);

    const updateMutation = useMutation({
        mutationFn: (data: EditProductForm) => {
            const updatedData = {
                name: data.name,
                sku: data.sku,
                colors: data.colors.map(color => ({
                    name: color.name,
                    _id: color._id
                }))
            };
            
            console.log('Formatted update data:', updatedData);
            return updateProduct(productId!, updatedData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            toast.success('Cập nhật sản phẩm thành công');
            navigate('/admin/products');
        },
        onError: (error: any) => {
            console.error('Update error:', error);
            const errorMessage = error.response?.data?.message || 'Lỗi khi cập nhật sản phẩm';
            toast.error(errorMessage);
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddColor = () => {
        setFormData(prev => ({
            ...prev,
            colors: [...prev.colors, { colorName: '', actualColor: '#000000' }]
        }));
    };

    const handleColorChange = (index: number, field: 'colorName' | 'actualColor', value: string) => {
        setFormData(prev => ({
            ...prev,
            colors: prev.colors.map((color, i) => 
                i === index ? { ...color, [field]: value } : color
            )
        }));
    };

    const handleRemoveColor = (index: number) => {
        setFormData(prev => ({
            ...prev,
            colors: prev.colors.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.sku) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }

        // Log để debug
        console.log('ProductId:', productId);
        console.log('Form data being submitted:', formData);
        
        const updatedData = {
            name: formData.name,
            sku: formData.sku,
            colors: formData.colors.map(color => ({
                name: color.name,
                _id: color._id
            }))
        };

        console.log('Formatted data:', updatedData);
        updateMutation.mutate(updatedData);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <div className="flex flex-1">
                <AdminMenu className="w-64 bg-black p-6" />
                <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-6">Chỉnh sửa sản phẩm</h2>
                    <form onSubmit={handleSubmit} className="max-w-2xl">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Tên sản phẩm</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Mã SKU</label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Màu sắc</label>
                            {formData.colors.map((color, index) => (
                                <div key={index} className="flex gap-4 mb-2">
                                    <input
                                        type="text"
                                        value={color.colorName}
                                        onChange={(e) => handleColorChange(index, 'colorName', e.target.value)}
                                        placeholder="Tên màu"
                                        className="p-2 border rounded"
                                    />
                                    <input
                                        type="color"
                                        value={color.actualColor}
                                        onChange={(e) => handleColorChange(index, 'actualColor', e.target.value)}
                                        className="w-20 h-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveColor(index)}
                                        className="px-4 py-2 bg-red-500 text-white rounded"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddColor}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Thêm màu
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded"
                                disabled={updateMutation.isPending}
                            >
                                {updateMutation.isPending ? 'Đang cập nhật...' : 'Cập nhật'}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/admin/products')}
                                className="px-6 py-2 bg-gray-500 text-white rounded"
                            >
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default EditProduct;