"use client";

import { SignUpForm } from "@/components/shared/signUpForm";

export default function SignUpPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Form Section */}
      <div className="mt-8 mx-auto sm:max-w-md w-full h-full p-4 col-span-1 flex flex-col lg:justify-center">
        <div className="mb-6">
          <h3 className="text-2xl text-center md:text-left font-semibold tracking-tight">
            Create an account
          </h3>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
