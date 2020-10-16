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
const ProductInput_1 = require("./ProductInput");
const Product_1 = require("./Product");
let ProductResolver = class ProductResolver {
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield mongo_1.db.collection('product').find({}).toArray();
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    getProductsById(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productsId = data._id.map((value) => new mongodb_1.ObjectID(value));
                return yield mongo_1.db
                    .collection('product')
                    .find({ _id: { $in: productsId } })
                    .toArray();
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    getProductsByService(serviceID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield mongo_1.db
                    .collection('product')
                    .find({ service: serviceID })
                    .toArray();
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    updateProduct(where, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield mongo_1.db
                    .collection('product')
                    .findOneAndUpdate({ _id: new mongodb_1.ObjectID(where._id[0]) }, { $set: productData }, { returnOriginal: false });
                return product.value;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield mongo_1.db.collection('product').insertMany(productData);
                return product.ops[0];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    deleteProduct(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productsId = where._id.map((value) => new mongodb_1.ObjectID(value));
                const product = yield mongo_1.db
                    .collection('product')
                    .findAndDelete({ _id: { $in: productsId } });
                return product;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductInput_1.ProductWhereUniqueData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductsById", null);
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __param(0, type_graphql_1.Arg('serviceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProductsByService", null);
__decorate([
    type_graphql_1.Mutation(() => Product_1.Product),
    __param(0, type_graphql_1.Arg('where')),
    __param(1, type_graphql_1.Arg('productData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductInput_1.ProductWhereUniqueData,
        ProductInput_1.ProductData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    type_graphql_1.Mutation(() => Product_1.Product),
    __param(0, type_graphql_1.Arg('productData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductInput_1.ProductData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    type_graphql_1.Mutation(() => Product_1.Product),
    __param(0, type_graphql_1.Arg('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductInput_1.ProductWhereUniqueData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
ProductResolver = __decorate([
    type_graphql_1.Resolver()
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=ProductResolvers.js.map