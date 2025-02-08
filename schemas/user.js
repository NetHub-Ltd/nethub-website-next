import * as Yup from "yup";

export const userSchema = Yup.object({
  firstName: Yup.string().min(3).max(30).required("First name is required"),
  lastName: Yup.string().min(3).max(30).required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Gender must be either male or female")
    .required("Gender is required"),
  verification_token: Yup.string().required("Verification token is required"),
  hashedPassword: Yup.string().optional(),
});

// Define the user schema with optional fields for partial updates
export const userUpdateSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(50).optional(),
  lastName: Yup.string().min(2).max(50).optional(),
  dateOfBirth: Yup.date().optional(),
  gender: Yup.string().oneOf(["male", "female"]).optional(),
  email: Yup.string().email().optional(),
  hashedPassword: Yup.string().optional(),
});

export const UserResponseSchemaMain = Yup.object({
  id: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  // dateOfBirth: Yup.string()
  //   .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
  //   .required(),
  // gender: Yup.mixed().oneOf(["male", "female", "other"]).required(),
  // verification_token: Yup.string().optional(),
});
