export type Direction = {
    id?:string,
    //elimine country
    state: String,
    // elimine cp
    city: String,
    street: String,
    number: String;
    orders: Order[];
  }