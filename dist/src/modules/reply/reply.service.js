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
exports.ReplyService = void 0;
const common_1 = require("@nestjs/common");
const reply_entity_1 = require("./entity/reply.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reply_not_found_exception_1 = require("./exception/reply-not-found.exception");
let ReplyService = class ReplyService {
    constructor(replyRepository) {
        this.replyRepository = replyRepository;
    }
    async create(createReplyDto) {
        const reply = this.replyRepository.create({
            content: createReplyDto.content,
            userId: createReplyDto.userId,
        });
        try {
            return await this.replyRepository.insert(reply);
        }
        catch (err) {
            throw new Error(`Failed to create reply: ${err.message}`);
        }
    }
    async findAll() {
        const replies = await this.replyRepository.find();
        if (replies.length === 0) {
            throw new reply_not_found_exception_1.ReplyNotFoundException();
        }
        return replies;
    }
    async findOne(id) {
        const reply = await this.replyRepository.findOne({ where: { id } });
        if (reply === null) {
            throw new reply_not_found_exception_1.ReplyNotFoundException();
        }
        return reply;
    }
    update(id, updateReplyDto) {
        return `This action updates a #${id} reply`;
    }
    remove(id) {
        return this.replyRepository.delete(id);
    }
};
ReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reply_entity_1.Reply)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReplyService);
exports.ReplyService = ReplyService;
//# sourceMappingURL=reply.service.js.map