export interface IUser {
    _id: string;
    uuid: string;
    name: string;
    surname: string;
    email: string;
    createdAt: Date;
}

export interface IRequestBodyUser {
    uuid?: string;
    name: string;
    surname: string;
    email: string;
}
