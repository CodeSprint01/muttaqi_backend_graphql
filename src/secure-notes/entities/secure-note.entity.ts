import { ObjectType, Field } from '@nestjs/graphql';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class SecureNote {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  content : string

  @Field(() => Vualt)
  @ManyToOne(() => Vualt, (vualt) => vualt.secureNote)
  @JoinColumn({name: 'vualtId'})
  vualt: Vualt
}
