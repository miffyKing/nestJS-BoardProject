import { ChatGptAiService } from './chat-gpt-ai.service';
import { ChatGPTReport } from '@root/modules/chat-gpt-ai/entities/chat-gpt-ai.entity';
import { CreateChatGptAiDto } from '@root/modules/chat-gpt-ai/dto/create-chat-gpt-ai.dto';
import { UpdateChatGptAiDto } from '@root/modules/chat-gpt-ai/dto/update-chat-gpt-ai.dto';
export declare class ChatGptAiController {
    private readonly service;
    constructor(service: ChatGptAiService);
    findAll(): Promise<ChatGPTReport[]>;
    findById(id: number): Promise<ChatGPTReport[]>;
    getModelAnswer(data: CreateChatGptAiDto): Promise<import("typeorm").InsertResult>;
    update(id: number, updateChatGptAiDto: UpdateChatGptAiDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
