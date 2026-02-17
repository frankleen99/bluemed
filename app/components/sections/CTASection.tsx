// components/CTASection.tsx
import Link from "next/link";
import React from "react";
//call in the buttton component in all of the code later

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-20 flex flex-col items-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Ready to book your appointment?
      </h2>
      <p className="text-gray-700 text-lg mb-8 max-w-xl">
        Don’t wait! Connect with top doctors in your area and manage your
        health with ease.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/auth/patient/login">
        <button className="bg-blue-600 cursor-poi hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Find a Doctor
        </button>
        </Link>
        <Link href="/register">
        <button className="bg-white cursor-pointer hover:bg-gray-50 border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          Sign Up Free
        </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
