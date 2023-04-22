"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatGptAiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chat_gpt_ai_dto_1 = require("./create-chat-gpt-ai.dto");
class UpdateChatGptAiDto extends (0, mapped_types_1.PartialType)(create_chat_gpt_ai_dto_1.CreateChatGptAiDto) {
}
exports.UpdateChatGptAiDto = UpdateChatGptAiDto;
//# sourceMappingURL=update-chat-gpt-ai.dto.js.map