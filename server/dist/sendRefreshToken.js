"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = (res, token) => {
    res.cookie('tid', token, {
        httpOnly: true,
        path: '/refresh_token_id',
    });
};
//# sourceMappingURL=sendRefreshToken.js.map