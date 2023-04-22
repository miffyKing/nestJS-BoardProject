"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReplyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reply_dto_1 = require("./create-reply.dto");
class UpdateReplyDto extends (0, mapped_types_1.PartialType)(create_reply_dto_1.CreateReplyDto) {
}
exports.UpdateReplyDto = UpdateReplyDto;
//# sourceMappingURL=update-reply.dto.js.map