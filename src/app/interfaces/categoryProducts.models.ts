import {Serializable} from "./serializalble.interface";



export class CategoryProducts {
    
    id: number;
    sku: string;
    name: string;
    price: string;
    spacial_price: string;
    base_img: string;
    position: number;
    rating:any;
    isWishlist: boolean = false;
}