"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyModule = void 0;
const common_1 = require("@nestjs/common");
const reply_service_1 = require("./reply.service");
const reply_controller_1 = require("./reply.controller");
const typeorm_1 = require("@nestjs/typeorm");
const reply_entity_1 = require("./entity/reply.entity");
let ReplyModule = class ReplyModule {
};
ReplyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reply_entity_1.Reply])],
        controllers: [reply_controller_1.ReplyController],
        providers: [reply_service_1.ReplyService],
    })
], ReplyModule);
exports.ReplyModule = ReplyModule;
//# sourceMappingURL=reply.module.js.map