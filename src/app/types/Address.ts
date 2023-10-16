export type Address = {
  id?: string;
  //elimine country
  state: string;
  city: string;
  CP: string;
  street: string;
  number: string;
  //elimine apartment
};
