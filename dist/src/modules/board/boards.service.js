"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_entity_1 = require("./entity/board.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_not_found_exception_1 = require("./exception/board-not-found.exception");
const boardCategory_enum_1 = require("./entity/boardCategory.enum");
const reply_entity_1 = require("../reply/entity/reply.entity");
let BoardsService = class BoardsService {
    constructor(boardRepository, replyRepository) {
        this.boardRepository = boardRepository;
        this.replyRepository = replyRepository;
    }
    async create(createBoardDto) {
        const board = this.boardRepository.create(createBoardDto);
        try {
            return await this.boardRepository.insert(board);
        }
        catch (error) {
            throw new Error(`Failed to create board: ${error.message}`);
        }
    }
    async findAll(query) {
        const boards = await this.boardRepository.find(query && { where: query });
        if (boards.length === 0) {
            throw new board_not_found_exception_1.BoardNotFoundException();
        }
        return boards;
    }
    async findByUserId(userId) {
        return this.findAll({ userId });
    }
    async findByBoardId(boardId) {
        return this.boardRepository.findOne({
            where: { id: boardId },
            relations: ['replies'],
        });
    }
    async findByCategoryId(categoryId) {
        return this.findAll({ categoryId });
    }
    async findBy(id, idType) {
        switch (idType) {
            case boardCategory_enum_1.BoardType.USERID._code:
                return this.findByUserId(id);
            case boardCategory_enum_1.BoardType.BOARDID._code:
                return this.findByBoardId(id);
            case boardCategory_enum_1.BoardType.CATEGORYID._code:
                return this.findByCategoryId(id);
            default:
                throw new Error('Invalid id type');
        }
    }
    async findByQuestion(question) {
        const boards = await this.boardRepository
            .createQueryBuilder('board')
            .where('board.contents LIKE :keyword', { keyword: `%${question}%` })
            .getMany();
        if (boards.length === 0) {
            throw new board_not_found_exception_1.BoardNotFoundException();
        }
        return boards;
    }
    async update(id, updateBoardDto) {
        const board = await this.boardRepository.findOne({ where: { id } });
        if (!board) {
            throw new common_1.NotFoundException(`Board with ID ${id} not found`);
        }
        const updatedBoard = Object.assign(board, updateBoardDto);
        return this.boardRepository.save(updatedBoard);
    }
    async softDelete(id) {
        const board = await this.boardRepository.findOne({ where: { id } });
        if (!board) {
            throw new common_1.NotFoundException(`Board with ID ${id} not found`);
        }
        await this.boardRepository.softDelete(id);
    }
    async restore(id) {
        return this.boardRepository.createQueryBuilder('board').restore().where('id = :id', { id: id }).execute();
    }
    async hardDelete(id) {
        return this.boardRepository.delete(id);
    }
    async updateReply(reply) {
        const board = await this.findBy(reply.boardId, 2);
        const newReply = new reply_entity_1.Reply();
        newReply.board = board[0];
        newReply.content = reply.content;
        newReply.userId = reply.userId;
        await this.replyRepository.save(newReply);
        return board;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __param(1, (0, typeorm_1.InjectRepository)(reply_entity_1.Reply)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map