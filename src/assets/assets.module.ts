import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsResolver } from './assets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Asset]),
    UserModule
  ],
  providers: [AssetsResolver, AssetsService],
  exports: [AssetsModule]
})
export class AssetsModule {}
