import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Response, Request } from 'express';
import { MongoDb } from './mongo';
import { UserResolver } from './resolvers/User/UserResolvers';
import { OrderResolver } from './resolvers/Order/OrderResolvers';
import { ServiceResolver } from './resolvers/Service/ServiceResolvers';
import { ProductResolver } from './resolvers/Product/ProductResolvers';
import { TypeServiceResolver } from './resolvers/TypeService/TypeServiceResolvers';
import formidable from 'formidable';
import fs from 'fs-extra';
import * as nodemailer from 'nodemailer';
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
          newPath = `${path}${userEmail}-${Date.now()}.pdf`;
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
              .then((res) => console.log(res))
              .catch((err) => {
                console.error(err);
              });
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
