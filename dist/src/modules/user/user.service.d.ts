import { Repository } from 'typeorm';
import { User } from '@root/modules/user/entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    remove(id: number): string;
}
