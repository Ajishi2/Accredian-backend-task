import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendReferralEmail } from '../utils/email';

const router: Router = express.Router();
const prisma = new PrismaClient();

interface ReferralRequestBody {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  program: string;
  phone: string;
}

router.post('/referral', async (req: Request, res: Response) => {
  try {
    const requiredFields = ['referrerEmail', 'refereeEmail'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ 
          error: `Missing required field: ${field}` 
        });
      }
    }

    const { referrerName, referrerEmail, refereeName, refereeEmail, program, phone } = req.body;

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        program,
        phone,
      },
    });

    await sendReferralEmail(referrerName, referrerEmail, refereeName, refereeEmail, program);

    return res.status(201).json({ message: 'Referral submitted successfully', referral });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;