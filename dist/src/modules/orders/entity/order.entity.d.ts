import { BaseTimeEntity } from '@root/common/domain/base-time.entity';
import { LocalDateTime } from 'js-joda';
export declare class Order extends BaseTimeEntity {
    id: number;
    orderAmount: number;
    orderDate: Date;
    deviceId: number;
    deliveryId: number;
    impUid: number;
    getOrderDate(): LocalDateTime;
}
