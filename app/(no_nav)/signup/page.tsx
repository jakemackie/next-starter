import { SignUpForm } from "@/components/shared/signUpForm";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="h-screen w-full flex flex-col lg:grid grid-cols-2 lg:gap-0">
      {/* Form Section */}
      <div className="h-full p-4 col-span-1 flex justify-center items-start lg:items-center order-last lg:order-first">
        <SignUpForm />
      </div>
      {/* Image Section */}
      <div className="max-h-52 lg:max-h-none h-full col-span-1 flex justify-center items-center relative order-first lg:order-last">
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
