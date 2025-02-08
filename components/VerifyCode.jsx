import React from "react";

const VerifyCode = () => {
  return (
    <div className="p-8 w-full mx-auto flex flex-col items-center justify-center">
      <p className="mb-4 text-gray-600 text-center">
        Enter Verification Code Sent to your Email
      </p>
      <input
        type="text"
        className="w-1/2 text-xl text-primary text-center focus:outline-none py-2 border-b border-primary"
      />
    </div>
  );
};

export default VerifyCode;
