import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tags } from './swagger.tags';

const document = new DocumentBuilder()
    .setTitle(`stock-server`)
    .setDescription(`stock-server의 swagger 문서입니다.`)
    .setVersion('1.0.0');

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(app) {
    return SwaggerModule.createDocument(app, document.build());
}
