import axios from "axios";
import { serverApi } from "../../lib/config";
import { Order, OrderItem } from "../types/order";

class OrderServiceApi {
    private readonly path: string
    constructor() {
        this.path = serverApi
    }

    async createOrder(orders: OrderItem[]): Promise<Order> {
        try {
            console.log(orders)
            const url = `${this.path}/orders/createOrder`;
            const result = await axios.post(url, orders, { withCredentials: true });
            console.log("POST: createOrder state, ", result.data.state)
            const order: Order = result.data.value;
            return order
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

export default OrderServiceApi