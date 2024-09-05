
import {UserEntity} from "../../entity/user.entity";
import {CrudRepository} from "../crud.repository";
// primary key data type
export interface UserRepository extends CrudRepository<UserEntity, string>{

}