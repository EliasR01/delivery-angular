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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereServiceData = exports.ProductWhereUniqueData = exports.ProductData = exports.ProductDataInput = void 0;
const type_graphql_1 = require("type-graphql");
let ProductDataInput = class ProductDataInput {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ProductDataInput.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDataInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDataInput.prototype, "stock", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDataInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDataInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], ProductDataInput.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ProductDataInput.prototype, "service", void 0);
ProductDataInput = __decorate([
    type_graphql_1.InputType()
], ProductDataInput);
exports.ProductDataInput = ProductDataInput;
let ProductData = class ProductData {
};
__decorate([
    type_graphql_1.Field(() => [ProductDataInput]),
    __metadata("design:type", Array)
], ProductData.prototype, "products", void 0);
ProductData = __decorate([
    type_graphql_1.InputType()
], ProductData);
exports.ProductData = ProductData;
let ProductWhereUniqueData = class ProductWhereUniqueData {
};
__decorate([
    type_graphql_1.Field(() => [type_graphql_1.ID]),
    __metadata("design:type", Array)
], ProductWhereUniqueData.prototype, "_id", void 0);
ProductWhereUniqueData = __decorate([
    type_graphql_1.InputType()
], ProductWhereUniqueData);
exports.ProductWhereUniqueData = ProductWhereUniqueData;
let ProductWhereServiceData = class ProductWhereServiceData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductWhereServiceData.prototype, "service", void 0);
ProductWhereServiceData = __decorate([
    type_graphql_1.InputType()
], ProductWhereServiceData);
exports.ProductWhereServiceData = ProductWhereServiceData;
//# sourceMappingURL=ProductInput.js.map