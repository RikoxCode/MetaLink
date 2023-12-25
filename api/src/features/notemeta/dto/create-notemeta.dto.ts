import { Stil } from "../schemas/notemeta.schema";


export class CreateNotemetaDto {
    readonly _archiveplace: string;
    readonly group: string;
    readonly archive_id: number;
    readonly title: string;
    readonly komponist: string;
    readonly arrangeur: string;
    readonly verlag: string;
    readonly grad: string;
    readonly flex: string;
    readonly stil: Stil;
    readonly duration: string;
    readonly auffuerungs_jahr: string;
    readonly digital_analog: string;
    readonly demo_url: string;
    readonly aufnahme_url: string;
    readonly jmr_aufnahme_url: string;
    readonly jungmusik_fest: string;
    readonly bemerkungen: string;
}