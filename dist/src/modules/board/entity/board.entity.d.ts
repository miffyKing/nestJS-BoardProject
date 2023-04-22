import { BaseTimeEntity } from '@root/common/domain/base-time.entity';
import { Reply } from "@root/modules/reply/entity/reply.entity";
export declare class Board extends BaseTimeEntity {
    id: number;
    contents: string;
    likes: number;
    title: string;
    userId: number;
    categoryId: number;
    deletedAt: Date;
    replies: Reply[];
}
