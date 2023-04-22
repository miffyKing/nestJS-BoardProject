"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPgTestTypeTrmModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path = require("path");
function getPgTestTypeTrmModule() {
    return typeorm_1.TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'testuser',
        password: 'testpass',
        database: 'test',
        entities: [path.join(__dirname, '../src/domain/**/*.entity.ts')],
        synchronize: true,
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    });
}
exports.getPgTestTypeTrmModule = getPgTestTypeTrmModule;
//# sourceMappingURL=get-pg-test-type-trm-module.js.map