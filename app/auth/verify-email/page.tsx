// app/auth/verify-email/page.tsx
"use client";
import React, { useState } from "react";
import FormInput from "@/components/FormInput"; // Ensure this path is correct
import Button from "@/components/Button"; // Ensure this path is correct
import { useRouter } from "next/navigation"; // Ensure correct import for Router

const VerifyEmailPage = () => {
  const [formData, setFormData] = useState({ email: "", OTP: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Email verified successfully!");
        router.push("/auth/Signin");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Verification failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Verify Email</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <FormInput
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <FormInput
          id="OTP"
          type="text"
          value={formData.OTP}
          onChange={handleChange}
          placeholder="Enter OTP"
        />
        <Button type="submit">Verify Email</Button>
      </form>
    </div>
  );
};

export default VerifyEmailPage;
