import {Serializable} from "./serializalble.interface";
import { Region } from './region.models';


export class Addresses {
    id: number;
    customer_id: number;
    region: Region;
    region_id: number;
    country_id: string;
    street: any;
	telephone: string;
    postcode: string;
	city: string;
    firstname: string;
    lastname: string;
    default_shipping: boolean;
    default_billing: boolean;
}