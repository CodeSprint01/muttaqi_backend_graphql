import { ObjectType, Field } from '@nestjs/graphql';
import { BankAccount } from 'src/bank-account/entities/bank-account.entity';
import { CreditCard } from 'src/credit-card/entities/credit-card.entity';
import { DrivingLicense } from 'src/driving-licenses/entities/driving-license.entity';
import { Identity } from 'src/identities/entities/identity.entity';
import { Login } from 'src/login/entities/login.entity';
import { SecureNote } from 'src/secure-notes/entities/secure-note.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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


  @Field(() => [DrivingLicense], { nullable: true }) 
 @OneToMany(() => DrivingLicense, (drivingLicense) => drivingLicense.vualt)
 drivingLicenses?: DrivingLicense[];

 @Field(() => [BankAccount], { nullable: true }) 
 @OneToMany(() => BankAccount, (bankAccount) => bankAccount.vualt)
 bankAccounts?: BankAccount[];

  @Field(() => [Identity], { nullable: true})
  @OneToMany(() => Identity, (identity) => identity.vualt)
  identities?: Identity[];


  @Field(() => [SecureNote], { nullable: true})
  @OneToMany(() => SecureNote, (secureNote) => secureNote.vualt)
  secureNote?: SecureNote[];


  @Field(() => [CreditCard], { nullable: true })
 @OneToMany(() => CreditCard, (creditCard) => creditCard.vualt)
 creditCards?: CreditCard[];

 @Field(() => Login)
 @OneToOne(() => Login, (login) => login.vualt) 
 @JoinColumn({name: 'loginId'}) 
 login?: Login;
}
