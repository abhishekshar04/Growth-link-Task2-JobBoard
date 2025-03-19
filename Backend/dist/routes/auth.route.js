"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authcontroller_1 = require("../controllers/authcontroller");
const authRouter = (0, express_1.Router)();
authRouter.post("/jobseeker/register", authcontroller_1.registerjobseeker);
authRouter.post("/recruiter/register", authcontroller_1.registerRecruiter);
authRouter.post("/login", authcontroller_1.loginUser);
exports.default = authRouter;
