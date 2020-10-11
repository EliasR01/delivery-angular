import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { ObjectID } from 'mongodb';
import { db } from '../../mongo';
import {
  TypeServiceData,
  TypeServiceWhereUniqueData,
} from './TypeServiceInput';
import { TypeService } from './TypeService';

@Resolver()
export class TypeServiceResolver {
  @Query(() => [TypeService])
  async getTypeOfService(): Promise<TypeService> {
    const type = await db.collection('type_service').find({}).toArray();
    return type;
  }

  @Mutation(() => TypeService)
  async createTypeService(
    @Arg('serviceData') serviceData: TypeServiceData
  ): Promise<TypeService> {
    try {
      const type = await db.collection('type_service').insertOne(serviceData);
      return type.ops[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => TypeService)
  async deleteTypeService(
    @Arg('where') where: TypeServiceWhereUniqueData
  ): Promise<TypeService> {
    try {
      const type = await db
        .collection('type_service')
        .findOneAndDelete(new ObjectID(where._id));
      return type.value;
    } catch (err) {
      throw new Error(err);
    }
  }
}
