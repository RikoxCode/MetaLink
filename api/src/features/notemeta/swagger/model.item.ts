import { ApiProperty } from '@nestjs/swagger';
import { Notemeta, Stil } from '../schemas/notemeta.schema';

export class SwaggerItem {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    group: string;

    @ApiProperty()
    _archiveplace: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    komponist: string;

    @ApiProperty()
    arrangeur: string;

    @ApiProperty()
    verlag: string;

    @ApiProperty()
    grad: string;

    @ApiProperty()
    flex: string;
    @ApiProperty()
    stil: Stil;

    @ApiProperty()
    duration: string;

    @ApiProperty()
    auffuerungs_jahr: string;

    @ApiProperty()
    digital_analog: string;

    @ApiProperty()
    demo_url: string;

    @ApiProperty()
    aufnahme_url: string;

    @ApiProperty()
    jmr_aufnahme_url: string;

    @ApiProperty()
    jungmusik_fest: string;

    @ApiProperty()
    bemerkungen: string;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;
}

export class SwaggerCreate {
    @ApiProperty()
    group: string;

    @ApiProperty()
    _archiveplace: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    komponist: string;

    @ApiProperty()
    arrangeur: string;

    @ApiProperty()
    verlag: string;

    @ApiProperty()
    grad: string;

    @ApiProperty()
    flex: string;
    @ApiProperty()
    stil: Stil;

    @ApiProperty()
    duration: string;

    @ApiProperty()
    auffuerungs_jahr: string;

    @ApiProperty()
    digital_analog: string;

    @ApiProperty()
    demo_url: string;

    @ApiProperty()
    aufnahme_url: string;

    @ApiProperty()
    jmr_aufnahme_url: string;

    @ApiProperty()
    jungmusik_fest: string;

    @ApiProperty()
    bemerkungen: string;
}

export class SwaggerUpdate {}

export class SwaggerDelete {
    @ApiProperty()
    acknowledged: boolean;
    
    @ApiProperty()
    deletedCount: number;
}