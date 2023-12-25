import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Stil {
    VOLKSLIED = 'Volkslied',
    SOLO_TUBA = 'Solo Tuba',
    SOLO_TROMPETE = 'Solo Trompete',
    SOLO_POSAUNE = 'Solo Posaune',

}

@Schema({
    timestamps: true
})
export class Notemeta {

    @Prop()
    group: string;

    @Prop()
    _archiveplace: number;

    @Prop()
    title: string;

    @Prop()
    komponist: string;

    @Prop()
    arrangeur: string;

    @Prop()
    verlag: string;

    @Prop()
    grad: string;

    @Prop()
    flex: string;

    @Prop()
    stil: Stil;

    @Prop()
    duration: string;

    @Prop()
    auffuerungs_jahr: string;

    @Prop()
    digital_analog: string;

    @Prop()
    demo_url: string;

    @Prop()
    aufnahme_url: string;

    @Prop()
    jmr_aufnahme_url: string;

    @Prop()
    jungmusik_fest: string;

    @Prop()
    bemerkungen: string;
}

export const NotemetaSchema = SchemaFactory.createForClass(Notemeta)