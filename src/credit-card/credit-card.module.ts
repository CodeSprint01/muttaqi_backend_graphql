import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardResolver } from './credit-card.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCard } from './entities/credit-card.entity';
import { VualtModule } from 'src/vualt/vualt.module';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCard]),
  VualtModule
  ],
  providers: [CreditCardResolver, CreditCardService],
})
export class CreditCardModule {}
