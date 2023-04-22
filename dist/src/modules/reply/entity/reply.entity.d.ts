import { BaseTimeEntity } from '@root/common/domain/base-time.entity';
import { Board } from "@root/modules/board/entity/board.entity";
export declare class Reply extends BaseTimeEntity {
    id: number;
    content: string;
    userId: number;
    board: Board;
}
