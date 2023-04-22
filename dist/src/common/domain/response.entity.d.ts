import { ResponseStatus } from '@root/common/domain/response-status';
export declare class ResponseEntity<T> {
    private readonly _statusCode;
    private readonly _message;
    private readonly _data;
    private constructor();
    static OK(): ResponseEntity<string>;
    static OK_WITH<T>(data: T): ResponseEntity<T>;
    static ERROR(): ResponseEntity<string>;
    static ERROR_WITH(message: string, code?: ResponseStatus): ResponseEntity<string>;
    static ERROR_WITH_DATA<T>(message: string, data: T, code?: ResponseStatus): ResponseEntity<T>;
    get statusCode(): string;
    get message(): string;
    get data(): T;
}
