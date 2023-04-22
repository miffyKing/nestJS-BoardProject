"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationError = void 0;
class CustomValidationError {
    constructor(validationError) {
        this.property = validationError.property;
        this.value = validationError.value;
        if (validationError.constraints) {
            this.constraints = Object.entries(validationError.constraints).map((obj) => new Constraint(obj));
        }
    }
}
exports.CustomValidationError = CustomValidationError;
class Constraint {
    constructor(constraint) {
        this.type = constraint[0];
        this.message = constraint[1];
    }
}
//# sourceMappingURL=custom-validation-error.js.map