"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const set_global_nests_app_1 = require("./common/config/set-global-nests-app");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    (0, set_global_nests_app_1.setGlobalNestApp)(app);
    await app.listen(process.env.port || 6000);
}
bootstrap();
//# sourceMappingURL=main.js.map