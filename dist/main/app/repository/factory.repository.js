import { UserRepositoryImpl } from "./custom/impl/user.repository.impl.js";
import { ImageRepositoryImpl } from "./custom/impl/image.repository.impl.js";
import { AdRepositoryImpl } from "./custom/impl/ad.repository.impl.js";
import { QueryRepositoryImpl } from "./custom/impl/query.repository.impl.js";
export var RepositoryType;
(function (RepositoryType) {
    RepositoryType[RepositoryType["AD"] = 0] = "AD";
    RepositoryType[RepositoryType["USER"] = 1] = "USER";
    RepositoryType[RepositoryType["IMAGE"] = 2] = "IMAGE";
    RepositoryType[RepositoryType["QUERY"] = 3] = "QUERY";
})(RepositoryType || (RepositoryType = {}));
export class FactoryRepository {
    static INSTANCE = new FactoryRepository();
    constructor() {
    }
    static getInstance() {
        return FactoryRepository.INSTANCE;
    }
    getRepository(type, connection) {
        switch (type) {
            case RepositoryType.USER:
                return new UserRepositoryImpl(connection);
            case RepositoryType.IMAGE:
                return new ImageRepositoryImpl(connection);
            case RepositoryType.AD:
                return new AdRepositoryImpl(connection);
            case RepositoryType.QUERY:
                return new QueryRepositoryImpl(connection);
            default:
                return null;
        }
    }
}
//# sourceMappingURL=factory.repository.js.map