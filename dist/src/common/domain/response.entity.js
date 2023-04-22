"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseEntity = void 0;
const class_transformer_1 = require("class-transformer");
const response_status_1 = require("./response-status");
class ResponseEntity {
    constructor(status, message, data) {
        this._statusCode = status;
        this._message = message;
        this._data = data;
    }
    static OK() {
        return new ResponseEntity(response_status_1.ResponseStatus.OK, '', '');
    }
    static OK_WITH(data) {
        return new ResponseEntity(response_status_1.ResponseStatus.OK, '', data);
    }
    static ERROR() {
        return new ResponseEntity(response_status_1.ResponseStatus.SERVER_ERROR, '서버 에러가 발생했습니다.', '');
    }
    static ERROR_WITH(message, code = response_status_1.ResponseStatus.SERVER_ERROR) {
        return new ResponseEntity(code, message, '');
    }
    static ERROR_WITH_DATA(message, data, code = response_status_1.ResponseStatus.SERVER_ERROR) {
        return new ResponseEntity(code, message, data);
    }
    get statusCode() {
        return this._statusCode;
    }
    get message() {
        return this._message;
    }
    get data() {
        return this._data;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], ResponseEntity.prototype, "_statusCode", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], ResponseEntity.prototype, "_message", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], ResponseEntity.prototype, "_data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ResponseEntity.prototype, "statusCode", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ResponseEntity.prototype, "message", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ResponseEntity.prototype, "data", null);
exports.ResponseEntity = ResponseEntity;
//# sourceMappingURL=response.entity.js.map