import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/products";

export const productApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const createProduct = async (productData: any) => {
    const response = await productApi.post("/", productData);
    return response.data;
};

export const getProducts = async () => {
    const response = await productApi.get("/");
    return response.data;
};

export const getProductById = async (id: string) => {
    const response = await productApi.get(`/${id}`);
    return response.data;
};

export const updateProduct = async (id: string, productData: any) => {
    const response = await productApi.put(`/${id}`, productData);
    return response.data;
};

export const deleteProduct = async (id: string) => {
    const response = await productApi.delete(`/${id}`);
    return response.data;
};
