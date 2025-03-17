"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authcontroller_1 = require("../controllers/authcontroller");
const authRouter = (0, express_1.Router)();
authRouter.post("/register", authcontroller_1.registerUser);
authRouter.post("/login", authcontroller_1.loginUser);
exports.default = authRouter;
