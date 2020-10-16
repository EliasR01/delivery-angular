"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const mongo_1 = require("../../mongo");
const mongodb_1 = require("mongodb");
const OrderInput_1 = require("./OrderInput");
const Order_1 = require("./Order");
let OrderResolver = class OrderResolver {
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('order').find({}).toArray();
        });
    }
    getOrdersByService(serviceID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('order').find({ service: serviceID }).toArray();
        });
    }
    getOrderById(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderId = data._id.map((value) => new mongodb_1.ObjectID(value));
            return yield mongo_1.db.collection('order').find({ _id: { $in: orderId } });
        });
    }
    getOrdersByUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('order').find({ user: userID }).toArray();
        });
    }
    updateOrder(where, orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield mongo_1.db
                    .collection('order')
                    .findOneAndUpdate({ _id: new mongodb_1.ObjectID(where._id[0]) }, { $set: orderData }, { returnOriginal: false });
                return order.value;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    createOrder(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield mongo_1.db.collection('order').insertOne(orderData);
                yield mongo_1.db.collection('user').updateMany({
                    _id: {
                        $in: [
                            new mongodb_1.ObjectID(orderData.user),
                            new mongodb_1.ObjectID(orderData.bussiness),
                        ],
                    },
                }, { $addToSet: { orders: new mongodb_1.ObjectID(order.ops[0]._id).toString() } });
                return order.ops[0];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    deleteOrder(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = where._id.map((value) => new mongodb_1.ObjectID(value));
                const order = yield mongo_1.db
                    .collection('order')
                    .findAndDelete({ _id: { $in: orderId } });
                return order;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Order_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
__decorate([
    type_graphql_1.Query(() => [Order_1.Order]),
    __param(0, type_graphql_1.Arg('serviceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrdersByService", null);
__decorate([
    type_graphql_1.Query(() => Order_1.Order),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderInput_1.OrderWhereUniqueData]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrderById", null);
__decorate([
    type_graphql_1.Query(() => [Order_1.Order]),
    __param(0, type_graphql_1.Arg('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrdersByUser", null);
__decorate([
    type_graphql_1.Mutation(() => Order_1.Order),
    __param(0, type_graphql_1.Arg('where')),
    __param(1, type_graphql_1.Arg('orderData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderInput_1.OrderWhereUniqueData,
        OrderInput_1.OrderData]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrder", null);
__decorate([
    type_graphql_1.Mutation(() => Order_1.Order),
    __param(0, type_graphql_1.Arg('orderData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderInput_1.OrderData]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    type_graphql_1.Mutation(() => Order_1.Order),
    __param(0, type_graphql_1.Arg('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderInput_1.OrderWhereUniqueData]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteOrder", null);
OrderResolver = __decorate([
    type_graphql_1.Resolver()
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=OrderResolvers.js.map