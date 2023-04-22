import { OrderService } from './order.service';
import { ResponseEntity } from '@root/common/domain/response.entity';
import { OrderResponseDto } from '@root/modules/orders/dto/order.response.dto';
import { CreateOrderDto } from '@root/modules/orders/dto/create-order.dto';
import { UpdateOrderDto } from '@root/modules/orders/dto/update-order.dto';
import { Order } from '@root/modules/orders/entity/order.entity';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<ResponseEntity<Order[]>>;
    findOne(id: number): Promise<ResponseEntity<OrderResponseDto>>;
    create(order: CreateOrderDto): Promise<ResponseEntity<Promise<CreateOrderDto & Order>>>;
    update(id: number, order: UpdateOrderDto): Promise<ResponseEntity<Promise<import("typeorm").UpdateResult>>>;
    delete(id: number): Promise<ResponseEntity<Promise<import("typeorm").DeleteResult>>>;
}
