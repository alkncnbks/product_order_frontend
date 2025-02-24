import axios from "axios";

const API_BASE_URL = "http://localhost:8081/api/orders";

export const orderApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const createOrder = async (orderData: any) => {
    const response = await orderApi.post("/", orderData);
    return response.data;
};

export const getOrders = async () => {
    const response = await orderApi.get("/");
    return response.data;
};

export const getOrderById = async (id: string) => {
    const response = await orderApi.get(`/${id}`);
    return response.data;
};

export const updateOrder = async (id: string, orderData: any) => {
    const response = await orderApi.put(`/${id}`, orderData);
    return response.data;
};

export const deleteOrder = async (id: string) => {
    const response = await orderApi.delete(`/${id}`);
    return response.data;
};
