import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string

  @Field()
  @Column()
  bankName: string

  @Field()
  @Column()
  accountNumber: string; 


  @Field(() => Vualt)
  @ManyToOne(() => Vualt, (vualt) => vualt.bankAccounts)
  @JoinColumn({name: 'vualtId'})
  vualt: Vualt;
}
