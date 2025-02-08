import { createUser, getUsers } from "@lib/user";
import * as Yup from "yup";
import { userSchema, UserResponseSchemaMain } from "@schemas/user"; // Assuming this is your Yup schema for user validation
import { sendEmail } from "@lib/utils";
const UserResponseSchema = Yup.array().of(
  Yup.object({
    id: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    // dateOfBirth: Yup.date().required(),
    // gender: Yup.string().required(),
    // verification_token: Yup.string().required(),
    // email_verified: Yup.boolean().required(),
    // createdAt: Yup.date().required(),
    // updatedAt: Yup.date().required(),
  })
);
// For getting all users
// GET /api/v1/users
export async function GET(request) {
  try {
    const users = await getUsers();
    if (users.length === 0) {
      return new Response("No users found", { status: 404 });
    }

    // Validate the fetched users
    const validatedUsers = await UserResponseSchema.validate(users, {
      stripUnknown: true,
    });

    return new Response(JSON.stringify(validatedUsers), { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Failed to fetch users", { status: 500 });
  }
}

// For creating a new user
export async function POST(request) {
  try {
    const data = await request.json();

    // Ensure data is not null or undefined
    if (!data || typeof data !== "object") {
      return new Response("Invalid request body", { status: 400 });
    }

    // Validate the incoming data using Yup
    await userSchema.validate(data, { abortEarly: false });

    // If validation passes, create the new user
    const newUser = await createUser(data);

    // validate and serialize data before returning
    const valiatedUser = await UserResponseSchemaMain.validate(newUser, {
      stripUnknown: true,
    });

    // send email validation
    const emailResponse = await sendEmail({
      to: newUser.email,
      subject: "Verify Your Email Address",
      htmlFilePath: "./public/templates/emailTemplate.html",
      dynamicValues: {
        ctaLink: process.env.emailverifylink,
      },
    });

    return new Response(JSON.stringify(valiatedUser), { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Handle JSON parsing errors
      console.error("JSON parsing error:", error); // Log the error
      return new Response("Invalid JSON format", { status: 400 });
    }

    if (error instanceof Yup.ValidationError) {
      // Handle validation errors
      console.error("Validation error:", error.errors); // Log validation errors
      return new Response(`Validation failed: ${error.errors.join(", ")}`, {
        status: 400,
      });
    }

    // General error handling (e.g., server errors)
    console.error("General error:", error); // Log the general error
    return new Response("Failed to create user", { status: 500 });
  }
}
