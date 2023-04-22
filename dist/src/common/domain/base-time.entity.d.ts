import { LocalDateTime } from 'js-joda';
export declare abstract class BaseTimeEntity {
    createdDate: Date;
    updatedDate: Date;
    getCreateDate(): LocalDateTime;
    getUpdatedDate(): LocalDateTime;
}
