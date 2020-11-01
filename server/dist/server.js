"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongo_1 = require("./mongo");
const UserResolvers_1 = require("./resolvers/User/UserResolvers");
const OrderResolvers_1 = require("./resolvers/Order/OrderResolvers");
const ServiceResolvers_1 = require("./resolvers/Service/ServiceResolvers");
const ProductResolvers_1 = require("./resolvers/Product/ProductResolvers");
const TypeServiceResolvers_1 = require("./resolvers/TypeService/TypeServiceResolvers");
const formidable_1 = __importDefault(require("formidable"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const nodemailer = __importStar(require("nodemailer"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = express_1.default();
        const mongo = new mongo_1.MongoDb();
        yield mongo.connect();
        app.use(cors_1.default({
            origin: ['http://localhost:4200'],
            credentials: true,
            allowedHeaders: [
                'Content-Type',
                'authentication',
                'businessEmail',
                'userEmail',
            ],
        }));
        app.use(cookie_parser_1.default());
        app.post('/uploadFile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            let newPath;
            const path = './files/';
            const form = new formidable_1.default.IncomingForm();
            form.uploadDir = path;
            form.encoding = 'binary';
            const userEmail = req.headers.useremail;
            const businessEmail = req.headers.businessemail;
            form.parse(req, (err, _, files) => {
                if (err) {
                    res.send('Upload failed');
                    throw new Error(err);
                }
                else {
                    const oldPath = files.order.path;
                    newPath = `${path}${userEmail}-${Date.now()}.pdf`;
                    fs_extra_1.default.rename(oldPath, newPath, (err) => __awaiter(void 0, void 0, void 0, function* () {
                        if (err)
                            throw err;
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
                        yield transporter
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
                        yield transporter
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
                        fs_extra_1.default.unlink(newPath, (err) => console.error(err));
                        res.end();
                    }));
                }
            });
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
        apolloServer.applyMiddleware({ app, cors: false, path: '/' });
        app.listen(4000, () => {
            console.log('Server started at port 4000');
        });
    }
    catch (err) {
        console.log(err);
    }
}))();
//# sourceMappingURL=server.js.map