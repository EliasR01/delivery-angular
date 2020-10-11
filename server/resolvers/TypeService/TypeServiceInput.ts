import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class TypeServiceData {
  @Field()
  name: string;
}

@InputType()
export class TypeServiceWhereUniqueData {
  @Field(() => ID)
  _id: string;
}
