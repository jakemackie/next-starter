"use client";

import { LoginForm } from "@/components/shared/loginForm";

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Form Section */}
      <div className="mt-8 mx-auto sm:max-w-md w-full h-full p-4 col-span-1 flex flex-col lg:justify-center">
        <div className="mb-6">
          <h3 className="text-2xl text-center md:text-left font-semibold tracking-tight">
            Welcome back
          </h3>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
