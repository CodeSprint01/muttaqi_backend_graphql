import { CreateAssetInput } from './create-asset.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssetInput extends PartialType(CreateAssetInput) {
  @Field()
  id: string;
}
