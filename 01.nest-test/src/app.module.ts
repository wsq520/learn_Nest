import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { UsersModule } from './users/users.module';

// nest 的模块装饰器
@Module({
  // 引入子模块
  imports: [VideoModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
