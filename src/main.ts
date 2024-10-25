import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  // app.use(logger)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
