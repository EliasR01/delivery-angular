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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const mongo_1 = require("../../mongo");
const mongodb_1 = require("mongodb");
const ServiceInput_1 = require("./ServiceInput");
const Service_1 = require("./Service");
let ServiceResolver = class ServiceResolver {
    getServices() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('service').find({}).toArray();
        });
    }
    getServiceByUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('service').find({ user: userID }).toArray();
        });
    }
    getServiceById(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db
                .collection('service')
                .findOne({ _id: new mongodb_1.ObjectID(data._id) });
        });
    }
    getServiceByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('service').find({ type }).toArray();
        });
    }
    updateService(where, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield mongo_1.db
                .collection('service')
                .findOneAndUpdate({ _id: new mongodb_1.ObjectID(where._id) }, { $set: data }, { returnOriginal: false });
            return service.value;
        });
    }
    createService(serviceData) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield mongo_1.db.collection('service').insertOne(serviceData);
            const returnUser = yield mongo_1.db
                .collection('user')
                .findOne(new mongodb_1.ObjectID(serviceData.user));
            if (!returnUser)
                throw new Error('User does not exists!');
            const _a = service.ops[0], { user } = _a, objectWithoutUser = __rest(_a, ["user"]);
            const returnObject = Object.assign(Object.assign({}, objectWithoutUser), { user: returnUser._id });
            console.log(returnObject);
            return returnObject;
        });
    }
    deleteService(where) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield mongo_1.db
                .collection('service')
                .findOneAndDelete({ _id: new mongodb_1.ObjectID(where._id) });
            return service.value;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Service_1.Service]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServices", null);
__decorate([
    type_graphql_1.Query(() => [Service_1.Service]),
    __param(0, type_graphql_1.Arg('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServiceByUser", null);
__decorate([
    type_graphql_1.Query(() => Service_1.Service),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceInput_1.ServiceWhereUniqueData]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServiceById", null);
__decorate([
    type_graphql_1.Query(() => [Service_1.Service]),
    __param(0, type_graphql_1.Arg('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "getServiceByType", null);
__decorate([
    type_graphql_1.Mutation(() => Service_1.Service),
    __param(0, type_graphql_1.Arg('where')),
    __param(1, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceInput_1.ServiceWhereUniqueData,
        ServiceInput_1.ServiceData]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "updateService", null);
__decorate([
    type_graphql_1.Mutation(() => Service_1.Service),
    __param(0, type_graphql_1.Arg('serviceData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceInput_1.ServiceData]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "createService", null);
__decorate([
    type_graphql_1.Mutation(() => Service_1.Service),
    __param(0, type_graphql_1.Arg('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceInput_1.ServiceWhereUniqueData]),
    __metadata("design:returntype", Promise)
], ServiceResolver.prototype, "deleteService", null);
ServiceResolver = __decorate([
    type_graphql_1.Resolver()
], ServiceResolver);
exports.ServiceResolver = ServiceResolver;
//# sourceMappingURL=ServiceResolvers.js.map