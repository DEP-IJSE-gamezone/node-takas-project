import express, {json, Request, Response} from 'express';
import {Validators} from "../middleware/validators.middleware.js";
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";

@Middleware([json()])
@RestController("/users")
export class UserHttpController {

    @Middleware([Validators.validateUser])
    @PostMapping()
    async createNewUserAccount(req: Request, res: Response) {
        console.log("Create new user account");
    }

    @DeleteMapping("/:user")
    async deleteUserAccount(req: Request, res: Response) {
        console.log("Delete user account");
    }

    @GetMapping("/:user") // path variable(can change the value )
    async getUserAccount(req: Request, res: Response) {
        console.log("Get user account information")
    }
}