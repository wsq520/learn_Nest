import { Module } from '@nestjs/common';
import { VideoService } from './video.service';

@Module({
  providers: [VideoService],
})
export class VideoModule {}
