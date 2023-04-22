import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ResponseEntity } from "@root/common/domain/response.entity";
export declare class ReplyController {
    private readonly replyService;
    constructor(replyService: ReplyService);
    create(createReplyDto: CreateReplyDto): Promise<ResponseEntity<import("typeorm").InsertResult>>;
    findReplies(): Promise<ResponseEntity<import("./entity/reply.entity").Reply[]>>;
    findReply(id: number): Promise<ResponseEntity<import("./entity/reply.entity").Reply>>;
    update(id: number, updateReplyDto: UpdateReplyDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
