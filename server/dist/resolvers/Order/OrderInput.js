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
exports.OrderWhereUniqueData = exports.OrderData = void 0;
const type_graphql_1 = require("type-graphql");
let OrderData = class OrderData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderData.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], OrderData.prototype, "emited", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderData.prototype, "service", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], OrderData.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderData.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], OrderData.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderData.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderData.prototype, "business", void 0);
OrderData = __decorate([
    type_graphql_1.InputType()
], OrderData);
exports.OrderData = OrderData;
let OrderWhereUniqueData = class OrderWhereUniqueData {
};
__decorate([
    type_graphql_1.Field(() => [type_graphql_1.ID]),
    __metadata("design:type", Array)
], OrderWhereUniqueData.prototype, "_id", void 0);
OrderWhereUniqueData = __decorate([
    type_graphql_1.InputType()
], OrderWhereUniqueData);
exports.OrderWhereUniqueData = OrderWhereUniqueData;
//# sourceMappingURL=OrderInput.js.map