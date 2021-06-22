import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository()
class usersRepositories extends Repository<User>{

}

export { usersRepositories }

