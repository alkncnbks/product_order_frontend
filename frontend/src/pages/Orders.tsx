import {JSX, useEffect, useState} from "react";
import axios from "axios";

interface Order {
    id: string;
    product: string;
    quantity: number;
}

const Orders: () => JSX.Element = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8081/api/orders")
            .then(response => setOrders(response.data))
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    return (
        <div>
            <h2 className="mb-4">Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id} className="border p-2">
                        {order.product} - {order.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
