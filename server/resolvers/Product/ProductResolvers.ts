import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { db } from '../../mongo';
import { ObjectID } from 'mongodb';
import { ProductData, ProductWhereUniqueData } from './ProductInput';
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

  @Mutation(() => Product)
  async updateProduct(
    @Arg('where') where: ProductWhereUniqueData,
    @Arg('productData') productData: ProductData
  ): Promise<Product> {
    try {
      const product = await db
        .collection('product')
        .findOneAndUpdate(
          { _id: new ObjectID(where._id[0]) },
          { $set: productData },
          { returnOriginal: false }
        );
      return product.value;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg('productData') productData: ProductData
  ): Promise<Product> {
    try {
      const product = await db.collection('product').insertMany(productData);
      return product.ops[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Arg('where') where: ProductWhereUniqueData
  ): Promise<Product> {
    try {
      const productsId = where._id.map((value) => new ObjectID(value));
      const product = await db
        .collection('product')
        .findAndDelete({ _id: { $in: productsId } });

      return product;
    } catch (err) {
      throw new Error(err);
    }
  }
}
