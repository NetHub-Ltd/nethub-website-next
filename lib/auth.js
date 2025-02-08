import crypto from "crypto";
// Import argon2 dynamically, only on the server-side
import dynamic from "next/dynamic";

const argon2 = dynamic(() => import("argon2"), { ssr: false });

// Generate a random verification token
export const generateVerificationToken = function () {
  return crypto.randomBytes(32).toString("hex");
};

// Hash a password with argon2
export async function hashPassword(password) {
  return await argon2.hash(password); // No need to manually handle salt, argon2 does it internally
}

// Compare plain password with hashed password
export async function comparePassword(plainPassword, hashedPassword) {
  try {
    return await argon2.verify(hashedPassword, plainPassword); // argon2.verify is used to compare passwords
  } catch (err) {
    return false; // In case of error (like invalid hash format), return false
  }
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
  const hashedPassword = await hashPassword(newPassword); // Use argon2 to hash the new password

  const user = await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  return user;
}
