import {Serializable} from "./serializalble.interface";
import { Addresses } from "./address.models";

export class Currency {
    base_currency_code: number
    base_currency_symbol: number
    default_display_currency_code: string
    default_display_currency_symbol: string
    available_currency_codes: any
    exchange_rates:any
}