import {UserRepositoryImpl} from "./custom/impl/user.repository.impl.js";
import {PoolClient} from "pg";
import {ImageRepositoryImpl} from "./custom/impl/image.repository.impl.js";
import {AdRepositoryImpl} from "./custom/impl/ad.repository.impl.js";
import {SuperRepository} from "./super.repository.js";
import {QueryRepositoryImpl} from "./custom/impl/query.repository.impl.js";

export enum RepositoryType {
    AD, USER, IMAGE, QUERY
}

export class FactoryRepository {

    private static INSTANCE: FactoryRepository = new FactoryRepository();

    private constructor() {
    }

    static getInstance(): FactoryRepository {
        return FactoryRepository.INSTANCE;
    }

    getRepository(type: RepositoryType, connection: PoolClient): SuperRepository | null {
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

    // getUserRepository(connection: PoolClient): UserRepository {
    //     return new UserRepositoryImpl(connection);
    // }
    //
    // getImageRepository(connection: PoolClient): ImageRepository {
    //     return new ImageRepositoryImpl(connection);
    // }
    //
    // getAdRepository(connection: PoolClient): AdRepository {
    //     return new AdRepositoryImpl(connection);
    // }
}