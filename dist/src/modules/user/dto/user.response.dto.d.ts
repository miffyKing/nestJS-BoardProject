import { User } from '@root/modules/user/entity/user.entity';
export declare class UserResponseDto {
    private readonly _id;
    private readonly _email;
    private readonly _userName;
    private readonly _password;
    constructor(user: User);
    df: any;
    get id(): number;
    get email(): string;
    get userName(): string;
    get password(): string;
}
