import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class ProductDataInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  name: string;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  service?: string;
}

@InputType()
export class ProductData {
  @Field(() => [ProductDataInput])
  products: ProductDataInput[];
}

@InputType()
export class ProductWhereUniqueData {
  @Field(() => [ID])
  _id: string[];
}

@InputType()
export class ProductWhereServiceData {
  @Field()
  service: string;
}
