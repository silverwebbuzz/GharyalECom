import {Serializable} from "./serializalble.interface";


export class CartItem {
    item_id: number;
    id: string
    sku: string
    name: string
    qty: number
    product_type: string
    quote_id: number
    product: any;
}