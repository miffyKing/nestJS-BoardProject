import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply } from "@root/modules/reply/entity/reply.entity";
import { Repository } from "typeorm";
export declare class ReplyService {
    private readonly replyRepository;
    constructor(replyRepository: Repository<Reply>);
    create(createReplyDto: CreateReplyDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Reply[]>;
    findOne(id: number): Promise<Reply>;
    update(id: number, updateReplyDto: UpdateReplyDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
