import { ObjectType, Field } from '@nestjs/graphql';
import { Vualt } from 'src/vualt/entities/vualt.entity';
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


  @Field(() => Vualt)
  @ManyToOne(() => Vualt, (vualt) => vualt.drivingLicenses)
  @JoinColumn({ name: 'vualtId' })
  vualt: Vualt;

}
