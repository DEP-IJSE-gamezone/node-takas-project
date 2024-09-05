import {UserTo} from './user.to';
import {ImageTo} from "./image.to";

export class AdTo {

    constructor(public id:number,
                public title:string,
                public description:string,
                public postedDate:string,
                public userEmail:string,
                public images:Array<string>) {
    }
}