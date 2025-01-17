var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { json } from 'express';
import { DeleteMapping, GetMapping, Middleware, PostMapping, RestController } from "../config/core.config.js";
let AdvertisementHttpController = class AdvertisementHttpController {
    async findAllAds(req, res) {
        console.log("Get all advertisements");
    }
    async postAdvertisement(req, res) {
        console.log("Post advertisement");
    }
    async deleteAdvertisement(req, res) {
        console.log("Delete advertisement");
    }
};
__decorate([
    GetMapping("/")
], AdvertisementHttpController.prototype, "findAllAds", null);
__decorate([
    PostMapping("/")
], AdvertisementHttpController.prototype, "postAdvertisement", null);
__decorate([
    DeleteMapping("/:id")
], AdvertisementHttpController.prototype, "deleteAdvertisement", null);
AdvertisementHttpController = __decorate([
    Middleware([json()]),
    RestController("/users/:user/ads")
], AdvertisementHttpController);
export { AdvertisementHttpController };
//# sourceMappingURL=advertisement.http.controller.js.map