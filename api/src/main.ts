import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('MetaLink Archive API')
    .setDescription('Die MetaLink API ermöglicht den Zugriff auf Metadaten von analogen Archivnotizen in einer MongoDB. Extrahieren Sie mühelos detaillierte Informationen für eine effiziente Verwaltung und Analyse Ihrer Archivdaten.')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .addTag('MetaLink Archive API')
    .build();

const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

app.enableCors();

await app.listen(process.env.PORT || 3000);
}
bootstrap();