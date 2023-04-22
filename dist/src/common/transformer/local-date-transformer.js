"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTransformer = void 0;
const date_time_util_1 = require("../util/date-time.util");
class LocalDateTransformer {
    to(entityValue) {
        return date_time_util_1.DateTimeUtil.toDate(entityValue);
    }
    from(databaseValue) {
        return date_time_util_1.DateTimeUtil.toLocalDate(databaseValue);
    }
}
exports.LocalDateTransformer = LocalDateTransformer;
//# sourceMappingURL=local-date-transformer.js.map