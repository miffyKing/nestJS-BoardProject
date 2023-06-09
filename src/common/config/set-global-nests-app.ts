import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { BadRequestException, ClassSerializerInterceptor, ValidationError, ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomValidationError } from '@root/common/config/filter/custom-validation-error';

export function setGlobalNestApp<T extends INestApplication>(app: T): void {
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        value: true,
      },
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors.map((e) => new CustomValidationError(e)));
      },
    }),
  );
}
