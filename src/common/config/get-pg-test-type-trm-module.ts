import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

export function getPgTestTypeTrmModule() {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'testuser',
    password: 'testpass',
    database: 'test',
    entities: [path.join(__dirname, '../src/domain/**/*.entity.ts')],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
  });
}
