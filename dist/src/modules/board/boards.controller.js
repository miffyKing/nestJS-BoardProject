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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boards_service_1 = require("./boards.service");
const create_board_dto_1 = require("./dto/create-board.dto");
const update_board_dto_1 = require("./dto/update-board.dto");
const common_2 = require("@nestjs/common");
const response_entity_1 = require("../../common/domain/response.entity");
const create_reply_dto_1 = require("../reply/dto/create-reply.dto");
let BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    async create(createBoardDto) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.create(createBoardDto));
    }
    async getBoards() {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.findAll());
    }
    async findByIdAndType(id, idType) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.findBy(id, idType));
    }
    async findBySearches(question) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.findByQuestion(question));
    }
    async update(id, updateBoardDto) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.update(id, updateBoardDto));
    }
    async delete(id) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.softDelete(id));
    }
    async restore(id) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.restore(id));
    }
    async hardDelete(id) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.boardsService.hardDelete(id));
    }
    async updateReply(createReplyDto) {
        return this.boardsService.updateReply(createReplyDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getBoards", null);
__decorate([
    (0, common_1.Get)('/board'),
    __param(0, (0, common_1.Query)('id', common_2.ParseIntPipe)),
    __param(1, (0, common_1.Query)('idType', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findByIdAndType", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findBySearches", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_board_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('/restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "hardDelete", null);
__decorate([
    (0, common_1.Patch)('/reply/:id'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reply_dto_1.CreateReplyDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateReply", null);
BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [boards_service_1.BoardsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map