import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssetInput {
  @Field()
  name: string

  @Field()
  type: string

  @Field()
  value: string
  
}
