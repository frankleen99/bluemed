"use client";
import Image from "next/image";
import SearchBar from "../ui/SearchBar";
import { Button } from "../ui/Buttons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                Healthcare Reimagined
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Book Appointments{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                with trusted
              </span>{" "}
              doctors, anytime, anywhere.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Skip the waiting room. Connect with top-rated healthcare
              professionals and book your appointment in minutes.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/#find-doctors">
                <Button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white px-8 py-4 lg:px-10 lg:py-8 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="how-it-works">
              <Button className="bg-white cursor-pointer hover:bg-gray-50 text-gray-900 lg:text-gray-900 px-8 lg:px-10 py-4 lg:py-8 rounded-xl font-semibold text-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105">
                How It Works
              </Button>
              </Link>
            </div>

            {/* trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  50,000+ patients
                </p>
                <p className="text-xs text-gray-500">trust our platform</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex justify-center">
            <Image
              src="/images/heroImg.webp"
              alt="Professional healthcare doctor"
              width={900}
              height={1200}
              className="w-full max-w-md lg:max-w-xl xl:max-w-2xl rounded-2xl object-cover"
              priority
            />

            {/* Floating Stats */}
            <div className="absolute top-12 -left-6 bg-white rounded-2xl p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    24/7 Available
                  </p>
                  <p className="text-xs text-gray-500">Instant support</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 -right-6 bg-white rounded-2xl p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Licensed Doctors
                  </p>
                  <p className="text-xs text-gray-500">Verified experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Positioned at Bottom */}
      <div className="absolute -bottom-10 left-0 w-full px-6 lg:px-8">
        <SearchBar />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
