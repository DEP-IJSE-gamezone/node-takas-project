import {UserTo} from "../../to/user.to";

// in service layer
// here we apply the YAGNI design pattern
// descriptive
export interface UserService{

    createNewUserAccount(user:UserTo):void;

    exitsUserAccount(email:string):Promise<boolean>;

    getUserAccountDetails(email:string):Promise<UserTo>;

    deleteUserAccount(email:string):Promise<void>;

}