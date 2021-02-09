import {Serializable} from "./serializalble.interface";



export class Categories {
    
    id: number;
    parent_id: number;
    name: string;
    image: string;
    is_active: boolean;
    position: number;
    level: number;
    product_count: number;
    children_data: any;
}