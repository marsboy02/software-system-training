import {Injectable} from "@nestjs/common";
import {UserRepository} from "./user.repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    getUserDate() {
        return this.userRepository.getUserData();
    }
}