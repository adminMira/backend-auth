import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'default@default.ru',
  })
  email: string;

  @ApiProperty({
    default: 'default',
  })
  password: string;
}
