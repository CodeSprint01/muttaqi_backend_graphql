import { Module } from '@nestjs/common';
import { VualtService } from './vualt.service';
import { VualtResolver } from './vualt.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vualt } from './entities/vualt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vualt])],
  providers: [VualtResolver, VualtService],
  exports:[VualtService]
})
export class VualtModule {}
