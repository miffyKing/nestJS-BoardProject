"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformDate = void 0;
function TransformDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
exports.TransformDate = TransformDate;
//# sourceMappingURL=date-transformer.js.map