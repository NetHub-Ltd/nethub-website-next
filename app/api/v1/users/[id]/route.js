import { getUserById, updateUser, deleteUser } from "@/lib/user";
import { userUpdateSchema, UserResponseSchemaMain } from "@/schemas/user";
import * as Yup from "yup";

// For getting a user by ID
// GET /api/v1/users/:id
export async function GET(request, { params }) {
  const { id } = await params;

  try {
    // Validate the ID (assuming it's a number)
    const idSchema = Yup.number()
      .positive()
      .integer()
      .required("ID is required");

    // Validate the ID using Yup
    await idSchema.validate(id);

    // Fetch the user based on the validated ID
    const user = await getUserById(id);

    if (user) {
      // Validate and serialize data before returning
      const validatedUser = await UserResponseSchemaMain.validate(user, {
        stripUnknown: true,
      });
      return new Response(JSON.stringify(validatedUser), { status: 200 });
    } else {
      return new Response("User not found", { status: 404 });
    }
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return new Response(`Validation failed: ${error.errors.join(", ")}`, {
        status: 400,
      });
    }

    // General error handling for other unexpected errors
    return new Response("Failed to fetch user", { status: 500 });
  }
}

// For deleting a user
// DELETE /api/v1/users
export async function DELETE(request, { params }) {
  const { id } = await params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  // Validate the ID
  const idSchema = Yup.number().positive().integer().required("ID is required");

  // Validate the ID using Yup
  await idSchema.validate(id);

  const user = await getUserById(id);
  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  try {
    const deletedUser = await deleteUser(id);
    console.log(deletedUser);
    return new Response({ status: 204 });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return new Response(`Validation failed: ${error.errors.join(", ")}`, {
        status: 400,
      });
    }

    return new Response("Failed to delete user", { status: 500 });
  }
}

// For updating a user (partial updates)
// PUT /api/v1/users/:id
export async function PUT(request, { params }) {
  const { id } = await params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  const data = await request.json();

  try {
    // Validate the incoming data against the update schema
    await userUpdateSchema.validate(data, { abortEarly: false });

    // Fetch the user by ID
    const user = await getUserById(id);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Update the user with the validated data
    const updatedUser = await updateUser(id, data);
    // Validate and serialize data before returning
    const validatedUser = await UserResponseSchemaMain.validate(updatedUser, {
      stripUnknown: true,
    });
    return new Response(JSON.stringify(validatedUser), { status: 201 });
  } catch (error) {
    // Handle validation errors (if any)
    if (error instanceof Yup.ValidationError) {
      return new Response(`Validation failed: ${error.errors.join(", ")}`, {
        status: 400,
      });
    }

    // Handle other unexpected errors
    return new Response("Failed to update user", { status: 500 });
  }
}
