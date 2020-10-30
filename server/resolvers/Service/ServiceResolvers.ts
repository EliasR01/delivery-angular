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
    try {
      const { products, ...createServiceData } = serviceData;

      const service = await db
        .collection('service')
        .insertOne(createServiceData);
      // console.log(service);
      const createProductData = serviceData.products.map((value) => {
        const productData = { ...value, service: service.ops[0]._id };
        return productData;
      });
      const insertedProducts = await db
        .collection('product')
        .insertMany(createProductData);

      const productsId = insertedProducts.ops.map((value: any) => value._id);
      const updateServiceData = { ...createServiceData, products: productsId };
      await db
        .collection('service')
        .findOneAndUpdate(
          { _id: new ObjectID(service.ops[0]._id) },
          { $set: updateServiceData },
          { returnOriginal: false }
        );

      return service.ops[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Service)
  async deleteService(
    @Arg('where') where: ServiceWhereUniqueData
  ): Promise<Service> {
    try {
      const service = await db
        .collection('service')
        .findOneAndDelete({ _id: new ObjectID(where._id) });

      await db
        .collection('product')
        .deleteMany({ _id: { $in: service.value.products } });
      return service.value;
    } catch (err) {
      throw new Error(err);
    }
  }
}
