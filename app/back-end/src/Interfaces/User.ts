export interface User {
    id: Number;
    username: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}