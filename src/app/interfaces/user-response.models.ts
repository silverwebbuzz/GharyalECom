import {Serializable} from "./serializalble.interface";
import { Addresses } from "./address.models";

export class UserResponse {
    id: number
    group_id: number
    default_billing: string
    default_shipping: string
    created_at: string
    updated_at: string
    created_in: string
    email: string
    firstname: string
    lastname: string
    store_id: number
    website_id: number
    addresses: Addresses
    disable_auto_group_change: string
    extension_attributes: any
}