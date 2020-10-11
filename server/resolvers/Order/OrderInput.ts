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

  @Field()
  products: string;

  @Field()
  user: string;

  @Field()
  bussiness: string;
}

@InputType()
export class OrderWhereUniqueData {
  @Field(() => [ID])
  _id: string[];
}
