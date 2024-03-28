import { ObjectType, Field } from '@nestjs/graphql';
import { Identity } from 'src/identities/entities/identity.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Vualt {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  password: string

  @Field(() => User) 
  @ManyToOne(() => User, (user) => user.vualts)
  @JoinColumn({name: 'userId'})
  user: User

  @Field(() => [Identity], { nullable: true})
  @OneToMany(() => Identity, (identity) => identity.vualt)
  identities: Identity[];
}
