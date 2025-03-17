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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
// User Signup
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password, role } = req.body;
            const userExists = yield User_1.default.findOne({ email });
            if (userExists)
                res.status(400).json({ message: "User already exists" });
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
            const newUser = yield User_1.default.create({ name, email, password: hashedPassword, role });
            if (newUser) {
                res.status(201).json({
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                    token: generateToken(newUser._id),
                });
            }
            else {
                res.status(400).json({ message: "Invalid user data" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Server error", error });
        }
    });
}
;
// User Login
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield User_1.default.findOne({ email });
            if (!user)
                res.status(400).json({ message: "Invalid email or password" });
            if (user) {
                const isMatch = yield bcryptjs_1.default.compare(password, user.password);
                if (!isMatch)
                    res.status(400).json({ message: "Invalid email or password" });
            }
            res.json({
                _id: user === null || user === void 0 ? void 0 : user._id,
                name: user === null || user === void 0 ? void 0 : user.name,
                email: user === null || user === void 0 ? void 0 : user.email,
                role: user === null || user === void 0 ? void 0 : user.role,
                token: generateToken(user === null || user === void 0 ? void 0 : user._id),
            });
        }
        catch (error) {
            res.status(500).json({ message: "Server error", error });
        }
    });
}
;
