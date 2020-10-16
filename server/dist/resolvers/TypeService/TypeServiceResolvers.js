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
const mongodb_1 = require("mongodb");
const mongo_1 = require("../../mongo");
const TypeServiceInput_1 = require("./TypeServiceInput");
const TypeService_1 = require("./TypeService");
let TypeServiceResolver = class TypeServiceResolver {
    getTypeOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield mongo_1.db.collection('type_service').find({}).toArray();
            return type;
        });
    }
    createTypeService(serviceData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type = yield mongo_1.db.collection('type_service').insertOne(serviceData);
                return type.ops[0];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    deleteTypeService(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type = yield mongo_1.db
                    .collection('type_service')
                    .findOneAndDelete(new mongodb_1.ObjectID(where._id));
                return type.value;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [TypeService_1.TypeService]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeServiceResolver.prototype, "getTypeOfService", null);
__decorate([
    type_graphql_1.Mutation(() => TypeService_1.TypeService),
    __param(0, type_graphql_1.Arg('serviceData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TypeServiceInput_1.TypeServiceData]),
    __metadata("design:returntype", Promise)
], TypeServiceResolver.prototype, "createTypeService", null);
__decorate([
    type_graphql_1.Mutation(() => TypeService_1.TypeService),
    __param(0, type_graphql_1.Arg('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TypeServiceInput_1.TypeServiceWhereUniqueData]),
    __metadata("design:returntype", Promise)
], TypeServiceResolver.prototype, "deleteTypeService", null);
TypeServiceResolver = __decorate([
    type_graphql_1.Resolver()
], TypeServiceResolver);
exports.TypeServiceResolver = TypeServiceResolver;
//# sourceMappingURL=TypeServiceResolvers.js.map