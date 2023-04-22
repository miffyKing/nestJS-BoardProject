"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTimeTransformer = void 0;
const date_time_util_1 = require("../util/date-time.util");
class LocalDateTimeTransformer {
    to(entityValue) {
        return date_time_util_1.DateTimeUtil.toDate(entityValue);
    }
    from(databaseValue) {
        return date_time_util_1.DateTimeUtil.toLocalDateTime(databaseValue);
    }
}
exports.LocalDateTimeTransformer = LocalDateTimeTransformer;
//# sourceMappingURL=local-date-time-transformer.js.map