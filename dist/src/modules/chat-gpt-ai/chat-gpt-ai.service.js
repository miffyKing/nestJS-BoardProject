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
exports.ChatGptAiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
const typeorm_1 = require("@nestjs/typeorm");
const chat_gpt_ai_entity_1 = require("./entities/chat-gpt-ai.entity");
const typeorm_2 = require("typeorm");
const DEFAULT_MODEL_ID = 'text-davinci-003';
let ChatGptAiService = class ChatGptAiService {
    constructor(ChatGPTReportRepository) {
        this.ChatGPTReportRepository = ChatGPTReportRepository;
        const configuration = new openai_1.Configuration({
            organization: 'org-VEJFhPQbMuJcUTMF3RzrQGsZ',
            apiKey: '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',
        });
        this.openAiApi = new openai_1.OpenAIApi(configuration);
    }
    async findAll() {
        return this.ChatGPTReportRepository.find();
    }
    async findById(id) {
        return this.ChatGPTReportRepository.find({ where: { userId: id } });
    }
    async createModelAnswer(createchatGPTAiDto) {
        try {
            const params = {
                prompt: createchatGPTAiDto.query,
                model: DEFAULT_MODEL_ID,
                temperature: 0.9,
                max_tokens: 2048,
            };
            const response = await this.openAiApi.createCompletion(params);
            const chatGPTReport = new chat_gpt_ai_entity_1.ChatGPTReport();
            chatGPTReport.query = createchatGPTAiDto.query;
            chatGPTReport.userId = createchatGPTAiDto.userId;
            chatGPTReport.answer = response.data.choices[0].text;
            chatGPTReport.isDeleted = false;
            console.log(response.data);
            return await this.ChatGPTReportRepository.insert(chatGPTReport);
        }
        catch (error) { }
    }
    async softDelete(id) {
        await this.ChatGPTReportRepository.update(id, { isDeleted: true });
    }
    async update(id, updateChatGptAiDto) {
        try {
            const params = {
                prompt: updateChatGptAiDto.query,
                model: DEFAULT_MODEL_ID,
                temperature: 0.9,
                max_tokens: 2048,
            };
            const response = await this.openAiApi.createCompletion(params);
            updateChatGptAiDto.answer = response.data.choices[0].text;
            console.log(response.data);
            return await this.ChatGPTReportRepository.update(id, updateChatGptAiDto);
        }
        catch (error) { }
    }
};
ChatGptAiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_gpt_ai_entity_1.ChatGPTReport)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatGptAiService);
exports.ChatGptAiService = ChatGptAiService;
//# sourceMappingURL=chat-gpt-ai.service.js.map