"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class BoardNotFoundException extends common_1.HttpException {
    constructor() {
        super('해당 게시글을 찾을 수 없습니다.', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.BoardNotFoundException = BoardNotFoundException;
//# sourceMappingURL=board-not-found.exception.js.map