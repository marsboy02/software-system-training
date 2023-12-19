import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule} from "@nestjs/swagger";
import generateSwaggerDocument from "./infra/swagger/swagger.generator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/docs', app, generateSwaggerDocument(app), {
    swaggerOptions: { persistAuthorization: true },
  });

  app.enableCors({ origin: true, credentials: true })

  await app.listen(3000);
}
bootstrap();
