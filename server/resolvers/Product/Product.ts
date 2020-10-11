import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

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
