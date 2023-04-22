import { BaseTimeEntity } from '@root/common/domain/base-time.entity';
export declare class User extends BaseTimeEntity {
    id: number;
    userName: string;
    email: string;
    password: string;
}
