import { Module } from '@nestjs/common';
import { VualtService } from './vualt.service';
import { VualtResolver } from './vualt.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vualt } from './entities/vualt.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vualt]),
UserModule],
  providers: [VualtResolver, VualtService],
  exports:[VualtService]
})
export class VualtModule {}
