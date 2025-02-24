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
exports.sendReferralEmail = sendReferralEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
function sendReferralEmail(referrerName, referrerEmail, refereeName, refereeEmail, program) {
    return __awaiter(this, void 0, void 0, function* () {
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: refereeEmail,
            subject: `${referrerName} has referred you to ${program} at Accredian`,
            html: `
      <h1>You've been referred to Accredian!</h1>
      <p>${referrerName} (${referrerEmail}) has referred you to the ${program} program at Accredian.</p>
      <p>Visit our website to learn more and enroll!</p>
    `,
        };
        try {
            yield transporter.sendMail(mailOptions);
            console.log('Referral email sent successfully');
        }
        catch (error) {
            console.error('Error sending referral email:', error);
            throw error;
        }
    });
}
