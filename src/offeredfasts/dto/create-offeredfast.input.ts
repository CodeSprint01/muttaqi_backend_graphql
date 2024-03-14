import { typeOfWorship } from 'src/prayer/entities/typeOfWorship-entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOfferedfastInput {
    @Field()
    typeOfWorshipId: string

    @Field()
    UserId: string
}
