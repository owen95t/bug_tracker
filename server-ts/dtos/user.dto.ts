import {IsEmail, Length} from "class-validator";

export class UserDTO {
    @IsEmail()
    email!: string;

    @Length(8, 15)
    password!: string

}
