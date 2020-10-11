import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { verify } from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { MongoDb, db } from './mongo';
import { UserResolver } from './resolvers/User/UserResolvers';
import { OrderResolver } from './resolvers/Order/OrderResolvers';
import { ServiceResolver } from './resolvers/Service/ServiceResolvers';
import { ProductResolver } from './resolvers/Product/ProductResolvers';
import { TypeServiceResolver } from './resolvers/TypeService/TypeServiceResolvers';
import { createAccessToken, createRefreshToken } from './auth';
import { sendRefreshToken } from './sendRefreshToken';
//mongodb://127.0.0.1:27017
(async () => {
  try {
    const app = express();
    const mongo = new MongoDb();
    await mongo.connect();

    app.use(
      cors({
        origin: 'http://localhost:4200',
        credentials: true,
        allowedHeaders: 'Content-Type',
      })
    );

    app.use(cookieParser());
    app.post('/refresh_token_id', async (req, res) => {
      const token = req.cookies.tid;
      if (!token) return res.send({ ok: false, accessToken: '' });
      let payload: any = null;
      try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
      } catch (err) {
        console.log(err);
        return res.send({ ok: false, accessToken: '' });
      }

      const user = await db
        .collection('user')
        .findOne(new ObjectID(payload.userId));

      if (!user) res.send({ ok: false, accessToken: '' });

      if (user.tokenVersion !== payload.tokenVersion)
        return res.send({ ok: false, accessToken: '' });

      sendRefreshToken(res, createRefreshToken(user._id));

      return res.send({ ok: true, accessToken: createAccessToken(user._id) });
    });

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          UserResolver,
          ProductResolver,
          OrderResolver,
          ServiceResolver,
          TypeServiceResolver,
        ],
      }),
      introspection: true,
      playground: true,
      context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app, cors: false, path: '/' });
    app.listen(4000, () => {
      console.log('Server started at port 4000');
    });
  } catch (err) {
    console.log(err);
  }
})();
