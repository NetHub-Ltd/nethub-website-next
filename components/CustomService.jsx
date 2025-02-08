"use client";
import { useState } from "react";

const CustomServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    description: "",
    contact: "",
  });

  const [selectedService, setSelectedService] = useState("");
  const [isOther, setIsOther] = useState(false);

  const services = [
    "Web Design",
    "SEO Optimization",
    "E-commerce Setup",
    "Digital Marketing",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "service") {
      setSelectedService(value);
      setIsOther(value === "Other");
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Service Requested: ${selectedService}\nDetails: ${formData.description}`
    );
    setFormData({ name: "", service: "", description: "", contact: "" });
    setSelectedService("");
    setIsOther(false);
  };

  return (
    <section className="w-full p-4 md:p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">
          Request a Custom Service
        </h2>
        <p className="text-secondaryText">
          Need something unique? Let us know how we can help!
        </p>
      </div>

      {/* Custom Service Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        {/* Service Selection */}
        <select
          name="service"
          value={selectedService}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select a Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        {/* Custom Service Input (Only if "Other" is selected) */}
        {isOther && (
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Specify your service"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        )}

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your service needs"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Your Contact Info (Email or Phone)"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
        >
          Submit Request
        </button>
      </form>
    </section>
  );
};

export default CustomServiceRequest;
