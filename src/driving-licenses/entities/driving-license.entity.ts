import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class DrivingLicense {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  licenseType: string

  @Field()
  @Column()
  issueDate: string

  @Field()
  @Column()
  expiryDate: string


  @Field(() => User)
  @ManyToOne(() => User, (user) => user.drivingLicenses)
  @JoinColumn({ name: 'userId' })
  user: User;

}
