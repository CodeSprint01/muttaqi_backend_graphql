import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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


  @Field(() => User)
  @ManyToOne(() => User, (user) => user.bankAccounts)
  user: User;
}
