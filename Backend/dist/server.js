"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = __importDefault(require("./db/db"));
app_1.app.get('/', (req, res) => {
    res.send('Hello World');
});
(0, db_1.default)()
    .then(() => {
    const port = process.env.PORT || 3000;
    app_1.app.listen(port, () => {
        console.log(`The server is running at PORT ${port}`);
    });
})
    .catch((err) => {
    console.log(`The Database connection failed in app.ts, ${err}`);
});
