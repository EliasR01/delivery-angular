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
exports.UserWhereUniqueData = exports.UserWhereData = exports.UserData = void 0;
const type_graphql_1 = require("type-graphql");
let UserData = class UserData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserData.prototype, "fileUrl", void 0);
UserData = __decorate([
    type_graphql_1.InputType()
], UserData);
exports.UserData = UserData;
let UserWhereData = class UserWhereData {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserWhereData.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserWhereData.prototype, "email", void 0);
UserWhereData = __decorate([
    type_graphql_1.InputType()
], UserWhereData);
exports.UserWhereData = UserWhereData;
let UserWhereUniqueData = class UserWhereUniqueData {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UserWhereUniqueData.prototype, "_id", void 0);
UserWhereUniqueData = __decorate([
    type_graphql_1.InputType()
], UserWhereUniqueData);
exports.UserWhereUniqueData = UserWhereUniqueData;
//# sourceMappingURL=UserInput.js.map