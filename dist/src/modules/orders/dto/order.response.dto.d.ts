import { Order } from '@root/modules/orders/entity/order.entity';
export declare class OrderResponseDto {
    private readonly _id;
    private readonly _orderAmount;
    private readonly _orderDate;
    private readonly _deviceId;
    private readonly _deliveryId;
    private readonly _impUid;
    constructor(order: Order);
    get orderId(): number;
    get orderAmount(): number;
    get orderDate(): Date;
    get deviceId(): number;
    get deliveryId(): number;
    get imp_uid(): number;
}
