// Import the Prisma client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function createUser(data) {
  try {
    console.log(`Creating user: ${data.firstName} ${data.lastName}`);

    // Convert dateOfBirth to a Date object
    const preparedData = {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth), // Ensure proper type for Prisma
    };

    // Create user
    return await prisma.user.create({
      data: preparedData,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Database error in createUser:", {
        message: error.message,
        name: error.name,
        stack: error.stack, // Include the stack trace for debugging
      });
    } else {
      // If it's not an instance of Error, log as a generic object
      console.error("Unknown error in createUser:", error);
    }

    // Handle specific Prisma errors
    if (error.code === "P2002") {
      throw new Error("A user with this email already exists.");
    }

    throw new Error("Failed to create user. Please try again.");
  }
}

// READ - Get all users
export async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Database error in getUsers:", error);
    throw new Error("Failed to fetch users.");
  }
}

// READ - Get a user by ID
export async function getUserById(id) {
  try {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Database error in getUserById:", error);
    throw new Error("Failed to fetch user.");
  }
}

// UPDATE - Update a user by ID
export async function updateUser(id, data) {
  try {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    console.error("Database error in updateUser:", error);
    if (error.code === "P2025") {
      throw new Error("User not found for update.");
    }
    throw new Error("Failed to update user.");
  }
}

// DELETE - Delete a user by ID
export async function deleteUser(id) {
  try {
    return await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error("Database error in deleteUser:", error);
    if (error.code === "P2025") {
      throw new Error("User not found for deletion.");
    }
    throw new Error("Failed to delete user.");
  }
}

export const verifyToken = async (token) => {
  const user = await prisma.user.findUnique({
    where: { verification_token: token },
  });

  if (!user) {
    console.error("Invalid or expired token");
    return false;
  }

  console.log("Token is valid");
  return true;
};
