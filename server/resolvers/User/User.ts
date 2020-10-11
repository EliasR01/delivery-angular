import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;
  @Field()
  name: string;
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
  @Field()
  type: string;
  @Field()
  address: string;
  @Field()
  country: string;
  @Field({ defaultValue: 0 })
  transactions: number;
  @Field()
  fileUrl: string;
  @Field(() => [String], { nullable: true })
  orders: string[];

  @Field()
  tokenVersion: number;
}
