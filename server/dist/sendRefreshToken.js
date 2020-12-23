"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = void 0;
const sendRefreshToken = (res, token) => {
    let expirationDate = new Date();
    if (token.length > 0) {
        expirationDate = new Date(Date.now() + 1800000);
    }
    res.cookie('tid', token, {
        domain: 'localhost',
        path: '/',
        expires: expirationDate,
    });
};
exports.sendRefreshToken = sendRefreshToken;
//# sourceMappingURL=sendRefreshToken.js.map