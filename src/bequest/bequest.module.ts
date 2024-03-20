import { Module } from '@nestjs/common';
import { BequestService } from './bequest.service';
import { BequestResolver } from './bequest.resolver';

@Module({
  providers: [BequestResolver, BequestService],
})
export class BequestModule {}
