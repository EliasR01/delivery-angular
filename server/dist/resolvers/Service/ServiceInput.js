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
exports.ServiceWhereUniqueData = exports.ServiceData = void 0;
const type_graphql_1 = require("type-graphql");
const ProductInput_1 = require("../Product/ProductInput");
let ServiceData = class ServiceData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ServiceData.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ServiceData.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ServiceData.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ServiceData.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(() => [ProductInput_1.ProductDataInput]),
    __metadata("design:type", Array)
], ServiceData.prototype, "products", void 0);
ServiceData = __decorate([
    type_graphql_1.InputType()
], ServiceData);
exports.ServiceData = ServiceData;
let ServiceWhereUniqueData = class ServiceWhereUniqueData {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], ServiceWhereUniqueData.prototype, "_id", void 0);
ServiceWhereUniqueData = __decorate([
    type_graphql_1.InputType()
], ServiceWhereUniqueData);
exports.ServiceWhereUniqueData = ServiceWhereUniqueData;
//# sourceMappingURL=ServiceInput.js.map