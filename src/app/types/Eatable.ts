import { Order } from "./Order";

export type Eatable = {
    name: string;
    description: string;
    photo: string;
    price: number;
    type: string;
    orders: Order[];
    restaurant: Restaurant;
    menuType: 'SALTY' | 'SWEET' | 'BEBERAGE';
}