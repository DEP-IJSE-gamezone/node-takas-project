import {IsEmail, IsNotEmpty, Matches, MinLength} from "class-validator";

export class UserTo {

    // constructor(public  email:string,
    //             public name:string,
    //             public contact:string) {
    // }

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    @MinLength(2)
    name!: string;
    @IsNotEmpty()
    @Matches(/^0\d{2}-\d{7}$/)
    contact!: string;

}