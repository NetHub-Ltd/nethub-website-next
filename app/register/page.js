"use client";

import Link from "next/link";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "@node_modules/react-icons/fa";
import Image from "@node_modules/next/image";
import { generateVerificationToken } from "@lib/auth";
import { useState, useEffect } from "react";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendtoAPI = async (values, setSubmitting) => {
    try {
      const verification_token = generateVerificationToken();
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, verification_token }),
      });

      if (response.status === 201) {
        const data = await response.json();
        setStep(2);
        console.log("User created successfully:", data);
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  // Validation schema for the form
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    dateOfBirth: Yup.date()
      .max(new Date(), "Date of birth cannot be in the future")
      .required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
  });

  // Initial values for the form fields
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
  };

  return (
    <div className="flex justify-center min-h-screen px-2 md:p-6">
      {/* step 1 */}
      {step === 1 ? (
        <div>
          <div className=" p-6 rounded-lg min-w-[350px] md:w-[400px] bg-white shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-300">
            <div className="mb-8 flex flex-col items-center">
              <h2 className="text-3xl text-center font-bold text-primary mb-2">
                Nethub
              </h2>
              <h3 className="text-lg font-bold text-center text-darkGray mb-1">
                Create a Nethub account
              </h3>
              <p className="text-sm text-center mb-6">
                Access all that Nethub has to offer with a single account. All
                fields are required.
              </p>
            </div>

            {/* Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  // Set submitting to true to disable the button during the request
                  setSubmitting(true);

                  sendtoAPI(values, setSubmitting);
                } catch (error) {
                  console.error("Error submitting the form:", error);
                } finally {
                  setSubmitting(false); // Enable the submit button after the request is completed
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  {/* FullName section */}
                  <div className="flex flex-row mb-4">
                    {/* First Name */}
                    <div className="mb-2">
                      <label
                        className="block text-sm text-primary font-medium mb-1"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-1 outline-none border-b focus:border-primary border-gray-300  "
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-sm text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                      <label
                        className="block text-sm text-primary font-medium mb-1"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-1 outline-none border-b focus:border-primary border-gray-300"
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-sm text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label
                      className="block text-sm text-primary font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-1 border-b border-gray-300  outline-none  focus:border-primary"
                    />
                    {errors.email && touched.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div className="mb-4 flex flex-row gap-4 justify-between items-center">
                    <div>
                      <label
                        className="block text-sm text-primary font-medium mb-1"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                        className="w-full px-3 py-2 border-b border-gray-300  focus:border-primary focus:outline-none"
                      >
                        <option className="text-sm" value="">
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        {/* <option value="other">Other</option> */}
                      </Field>
                      {errors.gender && touched.gender && (
                        <p className="text-sm text-red-500">{errors.gender}</p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-sm text-primary font-medium mb-1"
                        htmlFor="dateOfBirth"
                      >
                        Date of Birth
                      </label>
                      <Field
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="w-full px-3 py-2 border-b border-gray-300  outline-none focus:border-primary"
                      />
                      {errors.dateOfBirth && touched.dateOfBirth && (
                        <p className="text-sm text-red-500">
                          {errors.dateOfBirth}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-secondaryText mb-6 text-center">
                    By continuing, you agree to our{" "}
                    <Link className="text-primary" href="/terms">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link className="text-primary" href="/privacy">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  {/* Submit Button */}
                  <div className="flex justify-center mb-6">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-accent w-full text-white px-6 py-2 rounded-full hover:bg-primary-dark focus:outline-none hover:opacity-80 transition duration-300"
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="mb-4 text-center text-secondaryText">
                    <p>or create an account with</p>
                    <div className="flex justify-evenly gap-4 mt-4">
                      <Link href={"/login"}>
                        <div className="bg-white hover:bg-gray-100 shadow-sm text-primary gap-2 border border-gray-100 flex px-2 py-2 rounded-full">
                          <Image
                            width={30}
                            height={30}
                            src="/images/googlelogo.png"
                            alt="Google Logo"
                          />
                          <p className="text-accent text-md">
                            Sign in with Google
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        // step 2
        <div className="flex justify-center w-full min-h-[100px] mt-4">
          <div className="w-full md:w-[500px] rounded-md border border-slate-100 hover:border-primary duration-300 transition-all bg-white p-8">
            <h3 className="text-xl md:text-2xl  text-center font-bold mb-4 text-primary">
              Account created successfully
            </h3>
            <p className="text-sm md:text-xl text-secondaryText mb-6">
              We have sent a verification email to your email address. Click the
              link to your email email to verify your account.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setStep(1)}
                className="bg-accent text-white px-6 py-2 rounded-full hover:bg-primary-dark focus:outline-none hover:opacity-80 transition duration-300"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
