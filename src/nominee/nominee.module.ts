import { Module } from '@nestjs/common';
import { NomineeService } from './nominee.service';
import { NomineeResolver } from './nominee.resolver';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nominee } from './entities/nominee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Nominee]), UserModule],
  providers: [NomineeResolver, NomineeService],
  exports:[NomineeModule]
})
export class NomineeModule {}
