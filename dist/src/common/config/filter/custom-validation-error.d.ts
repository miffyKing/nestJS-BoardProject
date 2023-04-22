import { ValidationError } from '@nestjs/common';
export declare class CustomValidationError {
    property: string;
    value: any;
    constraints: Constraint[];
    constructor(validationError: ValidationError);
}
declare class Constraint {
    type: string;
    message: string;
    constructor(constraint: string[]);
}
export {};
