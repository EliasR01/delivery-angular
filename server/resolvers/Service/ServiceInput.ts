import { Field, ID, InputType } from 'type-graphql';
import { ProductDataInput } from '../Product/ProductInput';

@InputType()
export class ServiceData {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  user: string;

  @Field()
  type: string;

  @Field(() => [ProductDataInput])
  products: ProductDataInput[];
}

@InputType()
export class ServiceWhereUniqueData {
  @Field(() => ID)
  _id: string;
}
