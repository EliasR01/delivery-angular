import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class UserData {
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

  @Field()
  fileUrl: string;
}

@InputType()
export class UserWhereData {
  @Field()
  username?: string;

  @Field()
  email?: string;
}

@InputType()
export class UserWhereUniqueData {
  @Field(() => ID)
  _id: string;
}
