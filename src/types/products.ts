export interface IProduct {
    _id: string;
    name: string;
    sku: string;
    price: number;
    categoryId: string;
    categoryAncestors: string[];
    colors: IColor[];
    images: IImages;
    sizes: ISize[];
    shortDescription: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface IColor {
    baseColor: string;
    actualColor: string;
    colorName: string;
    _id?: string;
}

export interface IImages {
    main: string;
    hover: string;
    product: string[];
}

export interface ISize {
    size: string;
    stock: number;
    _id?: string;
}
export type ListProducts = Pick<IProduct,"_id"|"name"| "sku" | "colors">

export interface EditProductForm {
    name: string;
    sku: string;
    colors: Color[];
}

export interface Color {
    _id?: string;
    colorName: string;
    actualColor: string;
}

export interface DeleteProductParams {
    id: string;
    endpoint: string;
}