import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Login {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  account: string

  @Field()
  @Column()
  userName: string

  @Field()
  @Column()
  Password: string


  @Field(() => Vualt) 
 @ManyToOne(() => Vualt, (vualt) => vualt.login)
 @JoinColumn({name: 'vualtId'})
 vualt: Vualt;
}
