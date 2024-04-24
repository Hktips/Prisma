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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['info', 'query']
});
//  select * from question offset 0 limit 10;
//   select * from question offset 10 limit 10;
//  select * from question offset 20 limit 10;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.post.findMany({
            take: 2, // set limit how many post show and take at a time like in a page
            skip: 2 //offset how many skip at time like first 0 to skip 10 and 10 to skip(offset) 20
        });
        console.log(res);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("done");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
