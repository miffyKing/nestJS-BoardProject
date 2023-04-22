import { CreateChatGptAiDto } from '@root/modules/chat-gpt-ai/dto/create-chat-gpt-ai.dto';
import { ChatGPTReport } from '@root/modules/chat-gpt-ai/entities/chat-gpt-ai.entity';
import { Repository } from 'typeorm';
import { UpdateChatGptAiDto } from '@root/modules/chat-gpt-ai/dto/update-chat-gpt-ai.dto';
export declare class ChatGptAiService {
    private readonly ChatGPTReportRepository;
    private readonly openAiApi;
    constructor(ChatGPTReportRepository: Repository<ChatGPTReport>);
    findAll(): Promise<ChatGPTReport[]>;
    findById(id: number): Promise<ChatGPTReport[]>;
    createModelAnswer(createchatGPTAiDto: CreateChatGptAiDto): Promise<import("typeorm").InsertResult>;
    softDelete(id: number): Promise<void>;
    update(id: number, updateChatGptAiDto: UpdateChatGptAiDto): Promise<import("typeorm").UpdateResult>;
}
