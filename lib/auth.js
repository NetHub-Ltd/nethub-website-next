import crypto from "crypto";
import bcrypt from "bcrypt";

// Generate a random verification token
export const generateVerificationToken = function () {
  return crypto.randomBytes(32).toString("hex");
};

// Hash a password with bcrypt
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10); // 10 rounds of salting
  return await bcrypt.hash(password, salt);
}

// Compare plain password with hashed password
export async function comparePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Verify the email token by finding the user
export async function verifyEmailToken(prisma, token) {
  const user = await prisma.user.findUnique({
    where: { verification_token: token },
  });

  if (!user) {
    throw new Error("Invalid or expired token");
  }

  return user;
}

// Activate user by verifying email
export async function activateUser(prisma, userId) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      email_verified: true,
      verification_token: null, // Remove the verification token after activation
    },
  });

  return user;
}

// Update the user password
export async function updateUserPassword(prisma, userId, newPassword) {
  const hashedPassword = await hashPassword(newPassword);

  const user = await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  return user;
}
