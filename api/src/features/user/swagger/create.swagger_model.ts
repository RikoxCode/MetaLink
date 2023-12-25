import { ApiProperty } from '@nestjs/swagger';

export default class CreateSwaggerModel {
  @ApiProperty({
    description: 'Name of Customer / User',
  })
  readonly name: string;

  @ApiProperty({
    description: 'Offical Email of Customer / User',
  })
  readonly email: string;

  @ApiProperty({
    description: 'Password of Customer / User'
  })
  readonly password: string;

  @ApiProperty({
    description: 'Role of Customer / User',
  })
  readonly role: string;

  @ApiProperty({
    description: 'State of Customer / User [Banned, User, Administrator, Moderator]',
  })
  readonly state: string;
}
