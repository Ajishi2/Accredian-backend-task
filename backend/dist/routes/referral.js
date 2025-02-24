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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const email_1 = require("../utils/email");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.post('/referral', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { referrerName, referrerEmail, refereeName, refereeEmail, program, phone } = req.body;
        if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !program || !phone) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const referral = yield prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                program,
                phone,
            },
        });
        yield (0, email_1.sendReferralEmail)(referrerName, referrerEmail, refereeName, refereeEmail, program);
        return res.status(201).json({ message: 'Referral submitted successfully', referral });
    }
    catch (error) {
        console.error('Error processing referral:', error);
        return res.status(500).json({ error: 'An error occurred while processing the referral' });
    }
}));
exports.default = router;
