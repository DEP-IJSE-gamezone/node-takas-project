import { pool } from "../../../config/database.config.js";
import { FactoryRepository, RepositoryType } from "../../../repository/factory.repository.js";
export class UserServiceImpl {
    async createNewUserAccount(user) {
        const connection = await pool.connect();
        // Business Validation
        const userRepo = FactoryRepository.getInstance()
            .getRepository(RepositoryType.USER, connection);
        if (await userRepo.existsById(user.email)) {
            throw new Error("User already exists");
        }
        if ((await userRepo.findAll()).find(u => u.contact === user.contact)) {
            throw new Error("Contact number already associated with another user");
        }
        await userRepo.save(user);
        connection.release();
    }
    exitsUserAccount(email) {
        throw new Error("Method not implemented.");
    }
    getUserAccountDetails(email) {
        throw new Error("Method not implemented.");
    }
    deleteUserAccount(email) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=user.service.impl.js.map