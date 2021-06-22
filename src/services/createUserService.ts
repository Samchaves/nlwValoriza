import { usersRepositories } from "../repositories/usersRepositories";


interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class createUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = new usersRepositories();

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

export { createUserService }