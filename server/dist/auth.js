"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
exports.createAccessToken = (userId) => {
    return jsonwebtoken_1.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m',
    });
};
exports.createRefreshToken = (userId) => {
    return jsonwebtoken_1.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    });
};
//# sourceMappingURL=auth.js.map