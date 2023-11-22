"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Endcta = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const largerAvatarStyle = {
    width: "60px", // Adjust the width to make the circle larger
    height: "60px", // Adjust the height to make the circle larger
    marginRight: "16px", // Add some space between avatars
  };

  return (
    <div className="relative  w-full grid-cols-1 gap-5 overflow-hidden rounded-3xl bg-indigo-700 bg-cover bg-center lg:grid-cols-2 px-6 py-16 lg:py-8">
      <div className="flex items-center justify-center">
        <div className="flex ">
          {/* <Avatar style={largerAvatarStyle}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar style={largerAvatarStyle}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar style={largerAvatarStyle}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
      <br />
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold tracking-tight sm:text-4xl">
          Join Our Early Access Waitlist Now!
        </h1>

        <p className="mt-6 text-lg leading-8  text-indigo-200">
          it's never too late to start.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <form className="mx-auto  flex max-w-md gap-x-4">
            {/* <label htmlFor="email-address" className="sr-only">
              Email address
            </label> */}
            {/* <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            /> */}
            <a
              href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw"
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Waitlist
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
