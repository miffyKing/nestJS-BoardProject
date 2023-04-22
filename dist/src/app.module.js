"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const config_service_1 = require("./config/database/config.service");
const config_module_1 = require("./config/database/config.module");
const user_module_1 = require("./modules/user/user.module");
const boards_module_1 = require("./modules/board/boards.module");
const orders_module_1 = require("./modules/orders/orders.module");
const chat_gpt_ai_module_1 = require("./modules/chat-gpt-ai/chat-gpt-ai.module");
const reply_module_1 = require("./modules/reply/reply.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: './cool-config/back/.env' }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.PostgreSQLConfigModule],
                useClass: config_service_1.PostgreSQLConfigService,
                inject: [config_service_1.PostgreSQLConfigService],
            }),
            user_module_1.UserModule,
            boards_module_1.BoardsModule,
            orders_module_1.OrderModule,
            chat_gpt_ai_module_1.ChatGptAiModule,
            reply_module_1.ReplyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map