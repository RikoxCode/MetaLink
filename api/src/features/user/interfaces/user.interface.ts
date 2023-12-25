import { State } from "../schemas/user.schema";

export interface IUser {
    userId: string;
    username: string;
    password: string;
    email: string;
    token?: string;
    state?: State;
    role?: string;
};