"use client";

import { useState } from "react";
import AuthCard from "./AuthCard";
import Link from "next/link";
import { Button } from "../common";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <AuthCard variant="login">
        {/* Logo */}
        <img src="/images/navbar/logo.svg" alt="Logo" className="w-32 mb-6" />

        {!submitted ? (
          <>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              No worries! Enter your email and we'll send you a reset link.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm text-gray-700">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none
                  focus:border-gray-600 focus:ring-1 focus:ring-gray-100 transition text-gray-950"
                />
              </div>

              {/* Send Reset Link Button */}
              <div onClick={handleSubmit}>
                 <button
                  type="button"
                   onClick={handleSubmit}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm font-medium
                  text-white hover:bg-gray-900 transition bg-gradient-to-r from-blue-500 to-blue-600"
                >
                  Send email
                </button>
              </div>

              {/* Back to Login */}
              <div className="flex justify-center">
                <Link
                  href="/auth/logIn"
                  className="text-sm text-gray-600 hover:underline flex items-center gap-1"
                >
                  <span>&#8592;</span> Back to Log In
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="flex flex-col items-start">
              {/* Checkmark icon */}
              {/* <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div> */}

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Check your email
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We've sent a password reset link to{" "}
                <span className="font-medium text-grxay-800">{email}</span>.
                Check your inbox and follow the instructions.
              </p>

              <div className="space-y-4 w-full">
                {/* Resend email */}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm font-medium
                  text-gray-700 hover:bg-gray-50 transition"
                >
                  Resend email
                </button>

                {/* Back to Login */}
                <div className="flex justify-center">
                  <Link
                    href="/auth/logIn"
                    className="text-sm text-gray-600 hover:underline flex items-center gap-1"
                  >
                    <span>&#8592;</span> Back to Log In
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </AuthCard>
    </div>
  );
}
