import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotemetaModule } from './features/notemeta/notemeta.module';
import { UserModule } from './features/user/user.module';
import { MailController } from './features/mail/mail.controller';
import { MailService } from './features/mail/mail.service';
import { MailModule } from './features/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    NotemetaModule,
    UserModule,
    MailModule,
  ],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor');
    console.log('process.env.DB_URI: ', process.env.DB_URI)
  }
}
