import { LocalDate } from 'js-joda';
import { ValueTransformer } from 'typeorm';
export declare class LocalDateTransformer implements ValueTransformer {
    to(entityValue: LocalDate): Date;
    from(databaseValue: Date): LocalDate;
}
