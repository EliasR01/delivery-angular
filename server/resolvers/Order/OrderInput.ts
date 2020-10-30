import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class OrderData {
  @Field()
  address: string;

  @Field()
  emited: Date;

  @Field()
  service: string;

  @Field()
  price: number;

  @Field()
  status: string;

  @Field(() => [String])
  products: string[];

  @Field()
  user: string;

  @Field()
  business: string;

  // @Field()
  // fileUrl: string;
}

@InputType()
export class OrderWhereUniqueData {
  @Field(() => [ID])
  _id: string[];
}
