"use client";

import { LoginForm } from "@/components/shared/loginForm";
import Image from "next/image";
import BackButton from "@/components/shared/backButton";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex flex-col lg:grid grid-cols-2 lg:gap-0">
      {/* Form Section */}
      <div className="mx-auto md:max-w-xl w-full h-full p-4 col-span-1 flex flex-col lg:justify-center order-last lg:order-first">
        <div className="w-fit my-6">
          <BackButton />
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Welcome back</h3>
          <p className="text-muted-foreground">
            Please enter your details to login.
          </p>
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
