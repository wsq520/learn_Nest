import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // 创建 nest 应用
  const app = await NestFactory.create(AppModule);
  // 创建swagger文档及接口测试应用
  const options = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('一些描述')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000, () => {
    console.log(`'服务已经在3000端口开启'`);
  });
}
bootstrap();
