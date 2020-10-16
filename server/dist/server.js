"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = require("jsonwebtoken");
const mongodb_1 = require("mongodb");
const mongo_1 = require("./mongo");
const UserResolvers_1 = require("./resolvers/User/UserResolvers");
const OrderResolvers_1 = require("./resolvers/Order/OrderResolvers");
const ServiceResolvers_1 = require("./resolvers/Service/ServiceResolvers");
const ProductResolvers_1 = require("./resolvers/Product/ProductResolvers");
const TypeServiceResolvers_1 = require("./resolvers/TypeService/TypeServiceResolvers");
const auth_1 = require("./auth");
const sendRefreshToken_1 = require("./sendRefreshToken");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express_1.default();
        const mongo = new mongo_1.MongoDb();
        yield mongo.connect();
        app.use(cors_1.default({
            origin: 'http://localhost:4200',
            credentials: true,
            allowedHeaders: 'Content-Type',
        }));
        app.use(cookie_parser_1.default());
        app.post('/refresh_token_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const token = req.cookies.tid;
            if (!token)
                return res.send({ ok: false, accessToken: '' });
            let payload = null;
            try {
                payload = jsonwebtoken_1.verify(token, process.env.REFRESH_TOKEN_SECRET);
            }
            catch (err) {
                console.log(err);
                return res.send({ ok: false, accessToken: '' });
            }
            const user = yield mongo_1.db
                .collection('user')
                .findOne(new mongodb_1.ObjectID(payload.userId));
            if (!user)
                res.send({ ok: false, accessToken: '' });
            if (user.tokenVersion !== payload.tokenVersion)
                return res.send({ ok: false, accessToken: '' });
            sendRefreshToken_1.sendRefreshToken(res, auth_1.createRefreshToken(user._id));
            return res.send({ ok: true, accessToken: auth_1.createAccessToken(user._id) });
        }));
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema: yield type_graphql_1.buildSchema({
                resolvers: [
                    UserResolvers_1.UserResolver,
                    ProductResolvers_1.ProductResolver,
                    OrderResolvers_1.OrderResolver,
                    ServiceResolvers_1.ServiceResolver,
                    TypeServiceResolvers_1.TypeServiceResolver,
                ],
            }),
            introspection: true,
            playground: true,
            context: ({ req, res }) => ({ req, res }),
        });
        apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });
        app.listen(4000, () => {
            console.log('Server started at port 4000');
        });
    }
    catch (err) {
        console.log(err);
    }
}))();
//# sourceMappingURL=server.js.map