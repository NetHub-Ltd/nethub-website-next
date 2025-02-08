import React from "react";

const Email = () => {
  return (
    <div className="mx-auto flex flex-col  items-center justify-between p-8">
      {/* Username Field */}
      <div className="mb-6">
        <label className="block text-xl  text-primary  mb-1">Email</label>
        <div className="flex items-center border-b border-gray-300 py-1">
          <input
            type="text"
            name="username"
            value=""
            onChange=""
            placeholder="user@example.com"
            className="w-full p-2 md:text-xl outline-none bg-transparent"
          />
        </div>
      </div>
      {/* name and email */}
      <div className="flex flex-col gap-4">
        <div className="mb-6">
          <label className="block text-xl  text-primary  mb-2">
            First Name
          </label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              type="text"
              name="username"
              value=""
              onChange=""
              placeholder="First Name"
              className="w-full p-2 md:text-xl outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
