import { Field, ID, InputType } from 'type-graphql';

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

  @Field({ nullable: true })
  products?: string;
}

@InputType()
export class ServiceWhereUniqueData {
  @Field(() => ID)
  _id: string;
}
