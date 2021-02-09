import { Serializable } from "./serializalble.interface";

export class UserInterface{
    id: number
    group_id: number
    created_at: string
    updated_at: string
    created_in: string
    email: string
    firstname: string
    lastname: string
    store_id: number
    website_id: number
    addresses: any
    extension_attributes: any
}