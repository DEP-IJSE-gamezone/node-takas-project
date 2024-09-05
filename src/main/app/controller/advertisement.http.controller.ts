import express, {json, Request, Response} from 'express';
import {DeleteMapping, GetMapping, Middleware, PostMapping, RestController} from "../config/core.config.js";

@Middleware([json()])
@RestController("/users/:user/ads")
export class AdvertisementHttpController {

    @GetMapping("/")
    async findAllAds(req: Request, res: Response) {
        console.log("Get all advertisements");
    }

    @PostMapping("/")
    async postAdvertisement(req: Request, res: Response) {
        console.log("Post advertisement");
    }

    @DeleteMapping("/:id")
    async deleteAdvertisement(req: Request, res: Response) {
        console.log("Delete advertisement");
    }
}