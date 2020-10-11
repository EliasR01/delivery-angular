import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class TypeService {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;
}
