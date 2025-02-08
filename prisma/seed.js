import { PrismaClient } from "@prisma/client";
import { hashPassword, generateVerificationToken } from "../lib/auth.js";

const prisma = new PrismaClient();

async function seed() {
  const hashedPassword = await hashPassword("securepassword123");
  const token = generateVerificationToken();

  await prisma.user.create({
    data: {
      firstName: process.env.firstName,
      lastName: process.env.lastName,
      email: process.env.email,
      dateOfBirth: new Date(process.env.dateOfBirth),
      gender: process.env.gender,
      verification_token: token,
      email_verified: JSON.parse(process.env.email_verified),
      hashedPassword: hashedPassword,
    },
  });

  console.log("User created with hashed password and verification token.");
}

seed()
  .catch((err) => console.error(err))
  .finally(async () => await prisma.$disconnect());
