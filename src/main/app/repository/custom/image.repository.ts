import {UserTo} from "../../to/user.to";
import {ImageEntity} from "../../entity/image.entity";
import {CrudRepository} from "../crud.repository";

export interface ImageRepository extends CrudRepository<ImageEntity, number> {

}