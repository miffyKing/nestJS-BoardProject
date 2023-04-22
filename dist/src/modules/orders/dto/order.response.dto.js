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
exports.OrderResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
class OrderResponseDto {
    constructor(order) {
        this._id = order.id;
        this._orderAmount = order.orderAmount;
        this._orderDate = order.orderDate;
        this._deviceId = order.deviceId;
        this._deliveryId = order.deliveryId;
        this._impUid = order.impUid;
    }
    get orderId() {
        return this._id;
    }
    get orderAmount() {
        return this._orderAmount;
    }
    get orderDate() {
        return this._orderDate;
    }
    get deviceId() {
        return this._deviceId;
    }
    get deliveryId() {
        return this._deliveryId;
    }
    get imp_uid() {
        return this._impUid;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "_orderAmount", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], OrderResponseDto.prototype, "_orderDate", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "_deviceId", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "_deliveryId", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "_impUid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "orderId", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "orderAmount", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "orderDate", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "deviceId", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "deliveryId", null);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OrderResponseDto.prototype, "imp_uid", null);
exports.OrderResponseDto = OrderResponseDto;
//# sourceMappingURL=order.response.dto.js.map