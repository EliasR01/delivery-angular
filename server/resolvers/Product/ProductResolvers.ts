import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { db } from '../../mongo';
import { ObjectID } from 'mongodb';
import {
  ProductData,
  ProductWhereUniqueData,
  ProductWhereServiceData,
} from './ProductInput';
import { Product } from './Product';

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  async getProducts(): Promise<Product> {
    try {
      return await db.collection('product').find({}).toArray();
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => [Product])
  async getProductsById(
    @Arg('data') data: ProductWhereUniqueData
  ): Promise<Product> {
    try {
      const productsId = data._id.map((value) => new ObjectID(value));
      return await db
        .collection('product')
        .find({ _id: { $in: productsId } })
        .toArray();
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => [Product])
  async getProductsByService(
    @Arg('serviceID') serviceID: string
  ): Promise<Product> {
    try {
      return await db
        .collection('product')
        .find({ service: serviceID })
        .toArray();
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg('productData') productData: ProductData
  ): Promise<Boolean> {
    try {
      productData.products.map(async (value: any) => {
        const product = {
          name: value.name,
          stock: value.stock - value.amount,
          price: value.price,
          description: value.description,
          service: value.service,
        };
        await db
          .collection('product')
          .updateOne({ _id: new ObjectID(value._id) }, { $set: product });
      });

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => [Product])
  async createProduct(
    @Arg('productData') productData: ProductData
  ): Promise<Product> {
    try {
      const product = await db
        .collection('product')
        .insertMany(productData.products);
      const productsId = product.ops.map((value: any) => value._id);
      await db.collection('service').findOneAndUpdate(
        {
          _id: new ObjectID(productData.products[0].service),
        },
        { $addToSet: { products: { $each: productsId } } }
      );
      return product.ops;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async deleteProduct(
    @Arg('where') where: ProductWhereUniqueData,
    @Arg('service') service: ProductWhereServiceData
  ): Promise<Boolean> {
    try {
      const productId = where._id.map((value: any) => new ObjectID(value));
      await db.collection('product').deleteMany({ _id: { $in: productId } });
      await db.collection('service').findOneAndUpdate(
        {
          _id: new ObjectID(service.service),
        },
        {
          $pull: { products: { $in: productId } },
        }
      );
      return true;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
