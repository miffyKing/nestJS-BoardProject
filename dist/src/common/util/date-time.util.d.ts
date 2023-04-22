import { LocalDate, LocalDateTime } from 'js-joda';
export declare class DateTimeUtil {
    private static DATE_FORMATTER;
    private static DATE_TIME_FORMATTER;
    static toString(localDate: LocalDate | LocalDateTime): string;
    static toDate(localDate: LocalDate | LocalDateTime): Date;
    static toLocalDate(date: Date): LocalDate;
    static toLocalDateTime(date: Date): LocalDateTime;
    static toLocalDateBy(strDate: string): LocalDate;
    static toLocalDateTimeBy(strDate: string): LocalDateTime;
}
