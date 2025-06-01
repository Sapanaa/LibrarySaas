'use client';
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r text-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold mb-4">🚦 Too Fast!</h1>
        <p className="text-lg mb-6 text-red-200">
          You are sending requests too quickly.
          <br />
          Please slow down and try again in a few moments.
        </p>

        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="bg-white bg-opacity-20 text-white hover:bg-opacity-40 transition px-8 py-3 rounded-md font-semibold"
        >
          Go Back
        </Button>

        <p className="mt-8 text-sm text-red-300">
          If you believe this is a mistake, please contact{" "}
          <a href="mailto:support@example.com" className="underline hover:text-white">
            support@ifneeded.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default page;
