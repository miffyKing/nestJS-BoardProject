import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { ResponseEntity } from '@root/common/domain/response.entity';
import { CreateReplyDto } from "@root/modules/reply/dto/create-reply.dto";
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: CreateBoardDto): Promise<ResponseEntity<import("typeorm").InsertResult>>;
    getBoards(): Promise<ResponseEntity<import("./entity/board.entity").Board[]>>;
    findByIdAndType(id: number, idType: number): Promise<ResponseEntity<import("./entity/board.entity").Board | import("./entity/board.entity").Board[]>>;
    findBySearches(question: string): Promise<ResponseEntity<import("./entity/board.entity").Board[]>>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<ResponseEntity<import("./entity/board.entity").Board & UpdateBoardDto>>;
    delete(id: number): Promise<ResponseEntity<void>>;
    restore(id: number): Promise<ResponseEntity<import("typeorm").UpdateResult>>;
    hardDelete(id: number): Promise<ResponseEntity<import("typeorm").DeleteResult>>;
    updateReply(createReplyDto: CreateReplyDto): Promise<import("./entity/board.entity").Board | import("./entity/board.entity").Board[]>;
}
