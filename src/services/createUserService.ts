import { getCustomRepository } from "typeorm";
import { usersRepositories } from "../repositories/usersRepositories";
import { TypeFormatFlags } from "typescript";


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(usersRepositories);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        if (userAlreadyExists) {
            throw new Error("User already exists");

        }

        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService }