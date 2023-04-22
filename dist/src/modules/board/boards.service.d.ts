import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from '@root/modules/board/entity/board.entity';
import { InsertResult, Repository } from 'typeorm';
import { CreateReplyDto } from "@root/modules/reply/dto/create-reply.dto";
import { Reply } from "@root/modules/reply/entity/reply.entity";
export declare class BoardsService {
    private boardRepository;
    private replyRepository;
    constructor(boardRepository: Repository<Board>, replyRepository: Repository<Reply>);
    create(createBoardDto: CreateBoardDto): Promise<InsertResult>;
    findAll(query?: any): Promise<Board[]>;
    findByUserId(userId: number): Promise<Board[]>;
    findByBoardId(boardId: number): Promise<Board>;
    findByCategoryId(categoryId: number): Promise<Board[]>;
    findBy(id: number, idType: number): Promise<Board | Board[]>;
    findByQuestion(question: string): Promise<Board[]>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board & UpdateBoardDto>;
    softDelete(id: number): Promise<void>;
    restore(id: number): Promise<import("typeorm").UpdateResult>;
    hardDelete(id: number): Promise<import("typeorm").DeleteResult>;
    updateReply(reply: CreateReplyDto): Promise<Board | Board[]>;
}
