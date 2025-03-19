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
exports.registerjobseeker = registerjobseeker;
exports.registerRecruiter = registerRecruiter;
exports.loginUser = loginUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const generateToken = (email, password) => {
    return jsonwebtoken_1.default.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
// jobseeker Signup
function registerjobseeker(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password, skills, education, experience } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "Please enter all fields" });
        }
        else {
            try {
                const user = yield User_1.Jobseeker.findOne({ email });
                if (user) {
                    res.status(400).json({ message: "Jobseeker already exists" });
                }
                else {
                    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
                    const newJobseeker = new User_1.Jobseeker({
                        name,
                        email,
                        password: hashedPassword,
                        skills: skills || [],
                        education: education || [],
                        experience: experience || []
                    });
                    yield newJobseeker.save();
                    const token = generateToken(email, password);
                    res.status(200).json({
                        message: "Jobseeker registered successfully",
                        token: token
                    });
                }
            }
            catch (err) {
                res.status(500).json({ message: "Server Error" });
            }
        }
    });
}
;
// Recruiter Signup
function registerRecruiter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password, company } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ message: "Please enter all fields" });
        }
        else {
            try {
                const user = yield User_1.Recruiter.findOne({ email });
                if (user) {
                    res.status(400).json({ message: "Recruiter already exists" });
                }
                else {
                    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
                    const newRecruiter = new User_1.Recruiter({
                        name,
                        email,
                        password: hashedPassword,
                        company
                    });
                    yield newRecruiter.save();
                    const token = generateToken(email, password);
                    res.status(200).json({
                        message: "Recruiter registered successfully",
                        token: token
                    });
                }
            }
            catch (err) {
                res.status(500).json({ message: "Server Error" });
            }
        }
    });
}
;
// User Login
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Please enter all fields" });
        }
        else {
            try {
                const user = yield User_1.Jobseeker.findOne({ email });
                if (user) {
                    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
                    if (isMatch) {
                        const token = generateToken(email, password);
                        res.status(200).json({
                            message: "Jobseeker logged in successfully",
                            token: token
                        });
                    }
                    else {
                        res.status(400).json({ message: "Invalid Credentials" });
                    }
                }
                else {
                    const user = yield User_1.Recruiter.findOne({ email });
                    if (user) {
                        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
                        if (isMatch) {
                            const token = generateToken(email, password);
                            res.status(200).json({
                                message: "Recruiter logged in successfully",
                                token: token
                            });
                        }
                        else {
                            res.status(400).json({ message: "Invalid Credentials" });
                        }
                    }
                    else {
                        res.status(400).json({ message: "User does not exist" });
                    }
                }
            }
            catch (err) {
                res.status(500).json({ message: "Server Error" });
            }
        }
    });
}
;
