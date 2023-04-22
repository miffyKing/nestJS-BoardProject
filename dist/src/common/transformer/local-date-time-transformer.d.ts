import { ValueTransformer } from 'typeorm';
import { LocalDateTime } from 'js-joda';
export declare class LocalDateTimeTransformer implements ValueTransformer {
    to(entityValue: LocalDateTime): Date;
    from(databaseValue: Date): LocalDateTime;
}
