import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { CreateOrderDto } from '@root/modules/orders/dto/create-order.dto';
import { UpdateOrderDto } from '@root/modules/orders/dto/update-order.dto';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(order: CreateOrderDto): Promise<CreateOrderDto & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, order: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
