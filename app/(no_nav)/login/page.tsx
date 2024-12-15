"use client";

import { LoginForm } from "@/components/shared/loginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex flex-col lg:grid grid-cols-2 lg:gap-0">
      {/* Form Section */}
      <div className="mt-8 mx-auto sm:max-w-md w-full h-full p-4 col-span-1 flex flex-col lg:justify-center order-last lg:order-first">
        <div className="mb-6">
          <h3 className="text-2xl text-center md:text-left font-semibold tracking-tight">
            Welcome back
          </h3>
        </div>
        <LoginForm />
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex max-h-52 lg:max-h-none h-full col-span-1 justify-center items-center relative order-first lg:order-last">
        <Image
          src="/image.jpg"
          fill={true}
          alt="Picture of the author"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
