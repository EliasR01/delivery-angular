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
const bcryptjs_1 = require("bcryptjs");
const mongo_1 = require("../../mongo");
const sendRefreshToken_1 = require("../../sendRefreshToken");
const auth_1 = require("../../auth");
const mongodb_1 = require("mongodb");
const User_1 = require("./User");
const UserInput_1 = require("./UserInput");
let LoginResponse = class LoginResponse {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    __metadata("design:type", User_1.User)
], LoginResponse.prototype, "user", void 0);
LoginResponse = __decorate([
    type_graphql_1.ObjectType()
], LoginResponse);
let UserResolver = class UserResolver {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('user').find({}).toArray();
        });
    }
    getUserById(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('user').findOne({ _id: new mongodb_1.ObjectID(data._id) });
        });
    }
    getUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_1.db.collection('user').find(data).toArray();
        });
    }
    updateUser(where, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield mongo_1.db
                    .collection('user')
                    .findOneAndUpdate({ _id: new mongodb_1.ObjectID(where._id) }, { $set: userData }, { returnOriginal: false });
                return user.value;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const salt = bcryptjs_1.genSaltSync(10);
                const hashedPassword = yield bcryptjs_1.hash(userData.password, salt);
                const { password } = userData, data = __rest(userData, ["password"]);
                const createUserData = Object.assign(Object.assign({}, data), { password: hashedPassword });
                const user = yield mongo_1.db.collection('user').insertOne(createUserData);
                return user.ops[0];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    deleteUser(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield mongo_1.db
                    .collection('user')
                    .findOneAndDelete({ _id: new mongodb_1.ObjectID(where._id) });
                console.log(user);
                return user.value;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    login(username, password, { res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield mongo_1.db.collection('user').findOne({ username });
            if (!user)
                throw new Error('Invalid login credentials');
            const isEqual = yield bcryptjs_1.compare(password, user.password);
            if (!isEqual)
                throw new Error('Invalid login credentials');
            sendRefreshToken_1.sendRefreshToken(res, auth_1.createRefreshToken(user));
            return { accessToken: auth_1.createAccessToken(user), user };
        });
    }
    logout({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            sendRefreshToken_1.sendRefreshToken(res, '');
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    type_graphql_1.Query(() => User_1.User),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserWhereUniqueData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserById", null);
__decorate([
    type_graphql_1.Query(() => User_1.User),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserWhereData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg('where')),
    __param(1, type_graphql_1.Arg('userData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserWhereUniqueData,
        UserInput_1.UserData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg('userData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserWhereUniqueData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    type_graphql_1.Mutation(() => LoginResponse),
    __param(0, type_graphql_1.Arg('username')),
    __param(1, type_graphql_1.Arg('password')),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolvers.js.map