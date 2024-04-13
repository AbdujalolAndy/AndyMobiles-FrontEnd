export interface OrderItem {
    item_quantity: number;
    item_price: number;
    order_id: string;
    item_name: string;
    product_image: string;
}

export interface Order {
    mb_id: String;
    order_code: String;
    order_total_amount: Number;
    order_status: String;
    order_delivery_cost: Number;
    order_subtotal_amount: Number;
    order_product_qty: Number;
    order_delivery_address: String;
    order_owner_name: String;
    order_delivery_postal: Number;
}