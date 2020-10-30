import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Response, Request } from 'express';
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
import formidable from 'formidable';
import fs from 'fs-extra';
import * as nodemailer from 'nodemailer';
//mongodb://127.0.0.1:27017
(async () => {
  try {
    const app = express();
    const mongo = new MongoDb();
    await mongo.connect();

    app.use(
      cors({
        origin: ['http://localhost:4200'],
        credentials: true,
        allowedHeaders: [
          'Content-Type',
          'authentication',
          'businessEmail',
          'userEmail',
        ],
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

    app.post('/uploadFile', async (req: Request, res: Response) => {
      let newPath: string;
      const path = './files/';
      const form = new formidable.IncomingForm();
      form.uploadDir = path;
      form.encoding = 'binary';
      const userEmail = req.headers.useremail;
      const businessEmail = req.headers.businessemail;
      form.parse(req, (err, _, files) => {
        if (err) {
          res.send('Upload failed');
          throw new Error(err);
        } else {
          const oldPath = files.order.path;
          newPath = `${path}-${userEmail}-${Date.now()}`;
          fs.rename(oldPath, newPath, async (err) => {
            if (err) throw err;
            const transporter = nodemailer.createTransport({
              host: 'smtp.ethereal.email',
              port: 587,
              auth: {
                user: 'wilford.olson1@ethereal.email',
                pass: '8H4xmQhKq7hWyZvqeF',
              },
            });
            const attachments = [
              {
                filename: 'bill.pdf',
                path: newPath,
                contentType: 'application/pdf',
              },
            ];
            await transporter
              .sendMail({
                from: '"Delivery Service" "eliasalejo01@gmail.com"',
                to: businessEmail,
                subject: 'Reset password code',
                text: `Greetings. Here is the last ordered bill.`,
                attachments,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.error(err);
              });

            await transporter
              .sendMail({
                from: '"Delivery Service" "eliasalejo01@gmail.com"',
                to: userEmail,
                subject: 'Reset password code',
                text: `Greetings. Here is the last ordered bill.`,
                attachments,
              })
              .catch((err) => {
                console.error(err);
              });
            console.log(newPath);
            fs.unlink(newPath, (err) => console.error(err));
            res.end();
          });
        }
      });
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
