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
exports.PostgreSQLConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
let PostgreSQLConfigService = class PostgreSQLConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            username: this.configService.get('POSTGRE_DB_USERNAME'),
            password: this.configService.get('POSTGRE_DB_PASSWORD'),
            port: +this.configService.get('POSTGRE_DB_PORT'),
            host: this.configService.get('POSTGRE_DB_HOST'),
            database: this.configService.get('POSTGRE_DB_DATABASE'),
            entities: ['dist/**/**/*.entity{.ts,.js}'],
            synchronize: true,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        };
    }
};
PostgreSQLConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PostgreSQLConfigService);
exports.PostgreSQLConfigService = PostgreSQLConfigService;
//# sourceMappingURL=config.service.js.map