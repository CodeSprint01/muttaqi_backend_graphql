import { ObjectType, Field } from '@nestjs/graphql';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Identity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id : string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  identityNumber: string

  @Field()
  @Column()
  issueDate: string

  @Field()
  @Column()
  expiryDate: string

  @Field(() => Vualt)
  @ManyToOne(() => Vualt, (vualt) => vualt.identities)
  @JoinColumn({name: 'vualtId'})
  vualt: Vualt
}
