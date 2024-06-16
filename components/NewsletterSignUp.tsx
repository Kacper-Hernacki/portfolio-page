"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import MagicButton from "@/components/MagicButton";

export default function NewsletterSignUp() {
  function subscribeToTheNewsletter(){
    //todo: add functionality
    return;
  }

  return (
    <div className="h-[40rem] w-full rounded-md bg-black-100 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-start text-xl md:text-2xl font-bold">
          Do you want to earn money with code?
        </h1>
        <p className="text-start text-white-100 mt-3 font-semibold">
          Sign up to my Solopreneur's playbook Newsletter, in which I share a knowledge and experience from becoming
          independent coder.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="mb-4 p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <MagicButton handleClick={subscribeToTheNewsletter} title="Subscribe" />
      </div>
      <BackgroundBeams />
    </div>
  );
}
