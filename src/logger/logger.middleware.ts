import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}

// 函数中间件 您的中间件没有任何依赖关系时，我们可以考虑使用函数式中间件。
// export function logger(req, res, next) {
//   console.log(`Request...`);
//   next();
// };