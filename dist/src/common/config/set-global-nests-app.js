"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobalNestApp = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const custom_validation_error_1 = require("./filter/custom-validation-error");
function setGlobalNestApp(app) {
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        validationError: {
            value: true,
        },
        exceptionFactory: (validationErrors = []) => {
            return new common_1.BadRequestException(validationErrors.map((e) => new custom_validation_error_1.CustomValidationError(e)));
        },
    }));
}
exports.setGlobalNestApp = setGlobalNestApp;
//# sourceMappingURL=set-global-nests-app.js.map