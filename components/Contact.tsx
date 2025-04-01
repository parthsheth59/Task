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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitTrigger, setSubmitTrigger] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setSubmitTrigger(true);
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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          name="fname"
          type="text"
          placeholder="Name"
          value={formData.fname}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Mail"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        />
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        >
          <option value="">Budget</option>
          <option value="5000">5000</option>
          <option value="10000">10000</option>
          <option value="15000">15000</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white py-2 px-4 rounded col-span-2 hover:bg-orange-600"
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
