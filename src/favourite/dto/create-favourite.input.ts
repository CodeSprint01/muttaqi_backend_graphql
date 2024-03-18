import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavouriteInput {
  @Field()
  content: string

  @Field()
  favouriteTypeId: string

  @Field()
  userId: string
}
