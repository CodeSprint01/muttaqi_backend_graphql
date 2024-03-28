import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class CreditCard {
  @Field()
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  cardNumber: string

  @Field()
  @Column()
  nameOnCard: string

  @Field()
  @Column()
  expiryDate: string

  @Field()
  @Column()
  cvc: string


  @Field(() => Vualt) 
 @ManyToOne(() => Vualt, (vualt) => vualt.creditCards) 
 @JoinColumn({name: 'vualtId'})
 vualt: Vualt;
}
