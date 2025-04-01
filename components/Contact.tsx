"use client";

import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "@/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitTrigger, setSubmitTrigger] = useState(false);

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.fname.trim() || !/^[A-Za-z]+$/.test(formData.fname)) {
      newErrors.fname = "Valid first name is required.";
    }

    if (!formData.lname.trim() || !/^[A-Za-z]+$/.test(formData.lname)) {
      newErrors.lname = "Valid last name is required.";
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required.";
    }

    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required (10-15 digits).";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget.";
    }

    if (!formData.description.trim() || formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (validateForm()) {
      setSubmitTrigger(true);
    }
  };

  useEffect(() => {
    if (!submitTrigger) return;

    const sendForm = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_ENDPOINTS.CONTACT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setMessage("Form submitted successfully!");
          setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            budget: "",
            description: "",
          });
        } else {
          setMessage("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        setMessage("An error occurred. Please try again later.");
      }
      setLoading(false);
      setSubmitTrigger(false);
    };

    sendForm();
  }, [submitTrigger]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
      <p className="text-sm text-gray-600 mb-4">
        Please fill out the form below to get in touch with us.
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <input
            name="fname"
            type="text"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          {errors.fname && (
            <p className="text-red-500 text-sm">{errors.fname}</p>
          )}
        </div>

        <div>
          <input
            name="lname"
            type="text"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          {errors.lname && (
            <p className="text-red-500 text-sm">{errors.lname}</p>
          )}
        </div>

        <div className="col-span-2">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="col-span-2">
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="col-span-2">
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Budget</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="15000">15000</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm">{errors.budget}</p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white py-2 px-4 rounded col-span-2 hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && (
        <p className="text-sm text-center mt-4 text-gray-700">{message}</p>
      )}
    </div>
  );
}
