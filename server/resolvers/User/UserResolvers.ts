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
import * as nodemailer from 'nodemailer';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
  @Field(() => User)
  user: User;
}

@ObjectType()
class ResetPasswordResponse {
  @Field()
  resetToken: string;
  @Field()
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
      const salt = genSaltSync(10);
      const hashedPassword = await hash(userData.password, salt);
      const { password, ...data } = userData;
      const updateUserData = { ...data, password: hashedPassword };
      const user = await db
        .collection('user')
        .findOneAndUpdate(
          { _id: new ObjectID(where._id) },
          { $set: updateUserData },
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
    try {
      const user = await db.collection('user').findOne({ username });
      if (!user) throw new Error('Invalid login credentials');

      const isEqual = await compare(password, user.password);
      if (!isEqual) throw new Error('Invalid login credentials');
      sendRefreshToken(res, createRefreshToken(user));
      return { accessToken: createAccessToken(user), user };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => ResetPasswordResponse)
  async requestReset(
    @Arg('email') email: string
  ): Promise<ResetPasswordResponse> {
    email = email.toLowerCase();

    try {
      const user = await db.collection('user').findOne({ email });
      if (!user) throw new Error('There is no user registered with that email');
      const resetToken = (
        Math.random().toString(15).substring(2, 6) +
        Math.random().toString(15).substring(2, 6)
      ).toUpperCase();
      const expirationDate = Date.now() + 1800000;

      await db.collection('reset_tokens').insertOne({
        resetToken,
        expirationDate,
      });

      const transporter = nodemailer.createTransport({
        // host: 'smtp-relay.sendinblue.com',
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'wilford.olson1@ethereal.email',
          pass: '8H4xmQhKq7hWyZvqeF',
        },
      });

      await transporter.sendMail({
        from: '"Delivery Service" "eliasalejo01@gmail.com"',
        to: user.email,
        subject: 'Reset password code',
        text: `Reset code: ${resetToken} , it expires in 30m.`,
      });

      return {
        resetToken,
        user,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async resetPassword(@Arg('token') token: string): Promise<boolean> {
    const isToken = await db
      .collection('reset_tokens')
      .findOne({ resetToken: token });
    if (!isToken) throw new Error('Reset code is not valid!');

    const isExpired = Date.now() < isToken.expirationDate;
    if (!isExpired) throw new Error('Token is expired!');
    await db.collection('reset_tokens').deleteOne({ resetToken: token });
    return true;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: MyContext) {
    sendRefreshToken(res, '');
    return true;
  }
}
