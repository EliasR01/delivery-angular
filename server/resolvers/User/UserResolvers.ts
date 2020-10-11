import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
} from 'type-graphql';
import { hash, compare, genSaltSync } from 'bcryptjs';
import { db } from '../../mongo';
import { sendRefreshToken } from '../../sendRefreshToken';
import { createRefreshToken, createAccessToken } from '../../auth';
import { ObjectID } from 'mongodb';
import { User } from './User';
import { MyContext } from '../../MyContext';
import { UserWhereData, UserData, UserWhereUniqueData } from './UserInput';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User> {
    return await db.collection('user').find({}).toArray();
  }

  @Query(() => User)
  async getUserById(@Arg('data') data: UserWhereUniqueData): Promise<User> {
    return await db.collection('user').findOne({ _id: new ObjectID(data._id) });
  }

  @Query(() => User)
  async getUser(@Arg('data') data: UserWhereData): Promise<User> {
    return await db.collection('user').find(data).toArray();
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('where') where: UserWhereUniqueData,
    @Arg('userData') userData: UserData
  ): Promise<User> {
    try {
      const user = await db
        .collection('user')
        .findOneAndUpdate(
          { _id: new ObjectID(where._id) },
          { $set: userData },
          { returnOriginal: false }
        );
      return user.value;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => User)
  async createUser(@Arg('userData') userData: UserData): Promise<User> {
    try {
      const salt = genSaltSync(10);
      const hashedPassword = await hash(userData.password, salt);
      const { password, ...data } = userData;
      const createUserData = { ...data, password: hashedPassword };
      const user = await db.collection('user').insertOne(createUserData);
      return user.ops[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => User)
  async deleteUser(@Arg('where') where: UserWhereUniqueData): Promise<User> {
    try {
      const user = await db
        .collection('user')
        .findOneAndDelete({ _id: new ObjectID(where._id) });
      console.log(user);
      return user.value;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await db.collection('user').findOne({ username });
    if (!user) throw new Error('Invalid login credentials');

    const isEqual = await compare(password, user.password);
    if (!isEqual) throw new Error('Invalid login credentials');

    sendRefreshToken(res, createRefreshToken(user));

    return { accessToken: createAccessToken(user), user };
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: MyContext) {
    sendRefreshToken(res, '');
    return true;
  }
}
