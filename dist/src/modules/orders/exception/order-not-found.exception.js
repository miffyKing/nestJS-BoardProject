"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class OrderNotFoundException extends common_1.HttpException {
    constructor() {
        super('해당 주문을 찾을 수 없습니다.', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.OrderNotFoundException = OrderNotFoundException;
//# sourceMappingURL=order-not-found.exception.js.map