import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Url } from 'url';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const url: Url = req['_parsedUrl']
    // console.log(url.pathname)
    console.log(req.method, url.pathname);
    console.log('\tquery:', req.query);
    console.log('\tbody: ',  req.body);
    next();
  }
}
