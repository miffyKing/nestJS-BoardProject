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
var BoardType_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardType = void 0;
const ts_jenum_1 = require("ts-jenum");
let BoardType = BoardType_1 = class BoardType extends (0, ts_jenum_1.EnumType)() {
    constructor(_code) {
        super();
        this._code = _code;
    }
};
BoardType.USERID = new BoardType_1(1);
BoardType.CATEGORYID = new BoardType_1(3);
BoardType.BOARDID = new BoardType_1(2);
BoardType = BoardType_1 = __decorate([
    (0, ts_jenum_1.Enum)('_code'),
    __metadata("design:paramtypes", [Number])
], BoardType);
exports.BoardType = BoardType;
//# sourceMappingURL=boardCategory.enum.js.map