import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  app.use(bodyParser.json({ limit: '10mb' }));

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
