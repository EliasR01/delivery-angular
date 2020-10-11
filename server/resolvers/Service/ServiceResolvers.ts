import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { db } from '../../mongo';
import { ObjectID } from 'mongodb';
import { ServiceData, ServiceWhereUniqueData } from './ServiceInput';
import { Service } from './Service';

@Resolver()
export class ServiceResolver {
  @Query(() => [Service])
  async getServices(): Promise<Service> {
    return await db.collection('service').find({}).toArray();
  }

  @Query(() => [Service])
  async getServiceByUser(@Arg('userID') userID: string): Promise<Service> {
    return await db.collection('service').find({ user: userID }).toArray();
  }

  @Query(() => Service)
  async getServiceById(
    @Arg('data') data: ServiceWhereUniqueData
  ): Promise<Service> {
    return await db
      .collection('service')
      .findOne({ _id: new ObjectID(data._id) });
  }

  @Query(() => [Service])
  async getServiceByType(@Arg('type') type: string): Promise<Service> {
    return await db.collection('service').find({ type }).toArray();
  }

  @Mutation(() => Service)
  async updateService(
    @Arg('where') where: ServiceWhereUniqueData,
    @Arg('data') data: ServiceData
  ): Promise<Service> {
    const service = await db
      .collection('service')
      .findOneAndUpdate(
        { _id: new ObjectID(where._id) },
        { $set: data },
        { returnOriginal: false }
      );
    return service.value;
  }

  @Mutation(() => Service)
  async createService(
    @Arg('serviceData') serviceData: ServiceData
  ): Promise<Service> {
    const service = await db.collection('service').insertOne(serviceData);
    const returnUser = await db
      .collection('user')
      .findOne(new ObjectID(serviceData.user));
    if (!returnUser) throw new Error('User does not exists!');
    const { user, ...objectWithoutUser } = service.ops[0];
    const returnObject = { ...objectWithoutUser, user: returnUser._id };
    console.log(returnObject);
    return returnObject;
  }

  @Mutation(() => Service)
  async deleteService(
    @Arg('where') where: ServiceWhereUniqueData
  ): Promise<Service> {
    const service = await db
      .collection('service')
      .findOneAndDelete({ _id: new ObjectID(where._id) });
    return service.value;
  }
}
