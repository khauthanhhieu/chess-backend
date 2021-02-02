import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule, UsersModule, BlogsModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/')
  }
}
