import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Service {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  user: string;

  @Field()
  type: String;

  @Field(() => [String])
  products: string[];
}
