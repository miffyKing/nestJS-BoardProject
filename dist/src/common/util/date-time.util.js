"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeUtil = void 0;
const js_joda_1 = require("js-joda");
class DateTimeUtil {
    static toString(localDate) {
        if (!localDate) {
            return '';
        }
        if (localDate instanceof js_joda_1.LocalDate) {
            return localDate.format(DateTimeUtil.DATE_FORMATTER);
        }
        return localDate.format(DateTimeUtil.DATE_TIME_FORMATTER);
    }
    static toDate(localDate) {
        if (!localDate) {
            return null;
        }
        return (0, js_joda_1.convert)(localDate).toDate();
    }
    static toLocalDate(date) {
        if (!date) {
            return null;
        }
        return js_joda_1.LocalDate.from((0, js_joda_1.nativeJs)(date));
    }
    static toLocalDateTime(date) {
        if (!date) {
            return null;
        }
        return js_joda_1.LocalDateTime.from((0, js_joda_1.nativeJs)(date));
    }
    static toLocalDateBy(strDate) {
        if (!strDate) {
            return null;
        }
        return js_joda_1.LocalDate.parse(strDate, DateTimeUtil.DATE_FORMATTER);
    }
    static toLocalDateTimeBy(strDate) {
        if (!strDate) {
            return null;
        }
        return js_joda_1.LocalDateTime.parse(strDate, DateTimeUtil.DATE_TIME_FORMATTER);
    }
}
exports.DateTimeUtil = DateTimeUtil;
DateTimeUtil.DATE_FORMATTER = js_joda_1.DateTimeFormatter.ofPattern('yyyy-MM-dd');
DateTimeUtil.DATE_TIME_FORMATTER = js_joda_1.DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss');
//# sourceMappingURL=date-time.util.js.map