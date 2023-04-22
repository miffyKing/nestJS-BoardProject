"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ReplyNotFoundException extends common_1.HttpException {
    constructor() {
        super('해당 댓글을 찾을 수 없습니다.', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.ReplyNotFoundException = ReplyNotFoundException;
//# sourceMappingURL=reply-not-found.exception.js.map