import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Order {
  @Field()
  _id: string;
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
