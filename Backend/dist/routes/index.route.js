"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth.route"));
const job_route_1 = __importDefault(require("./job.route"));
const AllRoutes = (0, express_1.Router)();
AllRoutes.use("/auth", auth_route_1.default);
AllRoutes.use("/job", job_route_1.default);
exports.default = AllRoutes;
