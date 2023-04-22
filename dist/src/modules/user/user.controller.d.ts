import { User } from '@root/modules/user/entity/user.entity';
import { UserResponseDto } from '@root/modules/user/dto/user.response.dto';
import { ResponseEntity } from '@root/common/domain/response.entity';
import { UserService } from '@root/modules/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    findById(id: number): Promise<ResponseEntity<UserResponseDto>>;
    remove(id: string): string;
}
