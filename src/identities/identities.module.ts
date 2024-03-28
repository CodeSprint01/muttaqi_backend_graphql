import { Module } from '@nestjs/common';
import { IdentitiesService } from './identities.service';
import { IdentitiesResolver } from './identities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Identity } from './entities/identity.entity';
import { VualtModule } from 'src/vualt/vualt.module';

@Module({
  imports: [TypeOrmModule.forFeature([Identity]),
    VualtModule
  ],
  providers: [IdentitiesResolver, IdentitiesService],
})
export class IdentitiesModule { }
