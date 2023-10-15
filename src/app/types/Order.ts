import { Direction } from '@/app/types/Direction'

export type Order = {
    id?:string,
    totalPrice: number,
    adress: Direction,
    client: Client,
    restaurant: Restaurant,
    delivery: Delivery,
    status: 'WAITING' | 'ONPREP' | 'PREP' | 'ONITSWAY' | 'RECEIVED' | 'CANCELLED',
    date: Date,
    payment: Payment
}