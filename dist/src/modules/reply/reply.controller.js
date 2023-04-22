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
exports.ReplyController = void 0;
const common_1 = require("@nestjs/common");
const reply_service_1 = require("./reply.service");
const create_reply_dto_1 = require("./dto/create-reply.dto");
const update_reply_dto_1 = require("./dto/update-reply.dto");
const response_entity_1 = require("../../common/domain/response.entity");
let ReplyController = class ReplyController {
    constructor(replyService) {
        this.replyService = replyService;
    }
    async create(createReplyDto) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.replyService.create(createReplyDto));
    }
    async findReplies() {
        return response_entity_1.ResponseEntity.OK_WITH(await this.replyService.findAll());
    }
    async findReply(id) {
        return response_entity_1.ResponseEntity.OK_WITH(await this.replyService.findOne(id));
    }
    update(id, updateReplyDto) {
        return this.replyService.update(id, updateReplyDto);
    }
    remove(id) {
        return this.replyService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reply_dto_1.CreateReplyDto]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "findReplies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "findReply", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reply_dto_1.UpdateReplyDto]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReplyController.prototype, "remove", null);
ReplyController = __decorate([
    (0, common_1.Controller)('replies'),
    __metadata("design:paramtypes", [reply_service_1.ReplyService])
], ReplyController);
exports.ReplyController = ReplyController;
//# sourceMappingURL=reply.controller.js.map