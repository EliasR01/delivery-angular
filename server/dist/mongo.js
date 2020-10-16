"use strict";
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
const mongodb_1 = require("mongodb");
class MongoDb {
    close() {
        if (this.client) {
            this.client
                .close()
                .then()
                .catch((error) => {
                console.error(error);
            });
        }
        else {
            console.error('close: client is undefined');
        }
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.client) {
                    this.client = yield mongodb_1.MongoClient.connect(process.env.MONGO_DB_URI, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    });
                    exports.db = this.client.db(process.env.MONGO_DB_NAME);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getDb() {
        if (this.client) {
            return this.client.db(process.env.MONGO_DB_NAME);
        }
        else {
            console.error('no db found');
            return undefined;
        }
    }
}
exports.MongoDb = MongoDb;
//# sourceMappingURL=mongo.js.map