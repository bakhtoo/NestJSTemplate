import {INestApplication } from '@nestjs/common';
import {OpenAPIObject, DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { from } from 'rxjs';
import {SWAGGER_CONFIG} from './swagger.config'
export function createDocument(app: INestApplication): OpenAPIObject{
    const builder = new  DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setVersion(SWAGGER_CONFIG.version)
    .addBearerAuth({type:'http',scheme:'bearer',bearerFormat:'JWT'},'access-token');
    for(const tag of SWAGGER_CONFIG.tags){
        builder.addTag(tag)
    }
    const options = builder.build();
    return SwaggerModule.createDocument(app,options);
}