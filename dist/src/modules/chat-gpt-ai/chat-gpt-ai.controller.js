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
exports.ChatGptAiController = void 0;
const common_1 = require("@nestjs/common");
const chat_gpt_ai_service_1 = require("./chat-gpt-ai.service");
const create_chat_gpt_ai_dto_1 = require("./dto/create-chat-gpt-ai.dto");
const update_chat_gpt_ai_dto_1 = require("./dto/update-chat-gpt-ai.dto");
let ChatGptAiController = class ChatGptAiController {
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        return this.service.findAll();
    }
    async findById(id) {
        return this.service.findById(id);
    }
    getModelAnswer(data) {
        return this.service.createModelAnswer(data);
    }
    update(id, updateChatGptAiDto) {
        console.log('I will update entity');
        return this.service.update(id, updateChatGptAiDto);
    }
    delete(id) {
        console.log('I will SOFT DELETE');
        return this.service.softDelete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatGptAiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/user'),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatGptAiController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('/message'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_gpt_ai_dto_1.CreateChatGptAiDto]),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "getModelAnswer", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_chat_gpt_ai_dto_1.UpdateChatGptAiDto]),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChatGptAiController.prototype, "delete", null);
ChatGptAiController = __decorate([
    (0, common_1.Controller)('chat-gpt-ai'),
    __metadata("design:paramtypes", [chat_gpt_ai_service_1.ChatGptAiService])
], ChatGptAiController);
exports.ChatGptAiController = ChatGptAiController;
//# sourceMappingURL=chat-gpt-ai.controller.js.map