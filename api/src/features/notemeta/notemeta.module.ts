import { Module } from '@nestjs/common';
import { NotemetaService } from './notemeta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotemetaSchema } from './schemas/notemeta.schema';
import { NotemetaController } from './notemeta.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Notemeta', schema: NotemetaSchema }])
  ],
  controllers: [NotemetaController],
  providers: [NotemetaService]
})
export class NotemetaModule {}
