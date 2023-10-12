import { Direction } from "./Direction";
import { Review } from "./Review";

export type User = {
    id?:string,
    name: string,
    lastName: string,
    email: string;
    phoneNumber: string;
    password: string,
    adress?: Direction;
    role: string;
    createdAt: Date;
    reviewsHistory?: Review[];
  };