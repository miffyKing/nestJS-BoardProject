import { BaseTimeEntity } from '@root/common/domain/base-time.entity';
export declare class ChatGPTReport extends BaseTimeEntity {
    'id': number;
    'query': string;
    'answer': string;
    'userId': number;
    'isDeleted': boolean;
}
