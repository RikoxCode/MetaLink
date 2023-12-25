import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum State {
    BANNED = 'Banned',
    USER = 'User',
    ADMINISTRATOR = 'Administrator',
    MODERATOR = 'Moderator',
    LOGGEDIN = 'LoggedIn',
    LOGGEDOUT = 'LoggedOut'
}

@Schema({
    timestamps: true
})
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop()
    state: State;
}

export const UserSchema = SchemaFactory.createForClass(User);