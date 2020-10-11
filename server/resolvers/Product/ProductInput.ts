import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class ProductData {
  @Field()
  name: string;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  service: string;
}

@InputType()
export class ProductWhereUniqueData {
  @Field(() => [ID])
  _id: string[];
}
