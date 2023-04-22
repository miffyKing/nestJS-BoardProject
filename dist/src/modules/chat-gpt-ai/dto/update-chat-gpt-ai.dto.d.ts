import { CreateChatGptAiDto } from './create-chat-gpt-ai.dto';
declare const UpdateChatGptAiDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateChatGptAiDto>>;
export declare class UpdateChatGptAiDto extends UpdateChatGptAiDto_base {
    answer: string;
}
export {};
