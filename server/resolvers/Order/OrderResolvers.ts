import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { db } from '../../mongo';
import { ObjectID } from 'mongodb';
import { OrderData, OrderWhereUniqueData } from './OrderInput';
import { Order } from './Order';

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  async getOrders(): Promise<Order> {
    return await db.collection('order').find({}).toArray();
  }

  @Query(() => [Order])
  async getOrdersByService(
    @Arg('serviceID') serviceID: string
  ): Promise<Order> {
    return await db.collection('order').find({ service: serviceID }).toArray();
  }

  @Query(() => Order)
  async getOrderById(@Arg('data') data: OrderWhereUniqueData): Promise<Order> {
    const orderId = data._id.map((value) => new ObjectID(value));
    return await db.collection('order').find({ _id: { $in: orderId } });
  }

  @Query(() => [Order])
  async getOrdersByUser(
    @Arg('userID') userID: string
    // @Ctx() { res }: any
  ): Promise<Order> {
    try {
      // console.log(res);
      const user = await db
        .collection('user')
        .findOne({ _id: new ObjectID(userID) });
      if (user.type === 'customer') {
        return await db.collection('order').find({ user: userID }).toArray();
      } else {
        return await db
          .collection('order')
          .find({ business: userID })
          .toArray();
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Order)
  async updateOrder(
    @Arg('where') where: OrderWhereUniqueData,
    @Arg('orderData') orderData: OrderData
  ): Promise<Order> {
    try {
      const order = await db
        .collection('order')
        .findOneAndUpdate(
          { _id: new ObjectID(where._id[0]) },
          { $set: orderData },
          { returnOriginal: false }
        );
      return order.value;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Order)
  async createOrder(@Arg('orderData') orderData: OrderData): Promise<Order> {
    try {
      const order = await db.collection('order').insertOne(orderData);
      await db.collection('user').updateMany(
        {
          _id: {
            $in: [
              new ObjectID(orderData.user),
              new ObjectID(orderData.business),
            ],
          },
        },
        { $addToSet: { orders: new ObjectID(order.ops[0]._id).toString() } }
      );
      return order.ops[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async deleteOrder(
    @Arg('where') where: OrderWhereUniqueData
  ): Promise<Boolean> {
    try {
      const orderId = where._id.map((value) => new ObjectID(value));
      await db
        .collection('order')
        .deleteMany({ _id: { $in: orderId } }, { returnOriginal: true });
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
}
