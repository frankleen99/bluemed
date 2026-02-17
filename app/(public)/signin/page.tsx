"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PortalSelection() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900">
          Sign into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Bluemed
          </span>
        </h1>
        <p className="text-slate-500 mt-3 text-lg">
          Choose how you want to access the platform
        </p>
      </div>

      {/* Card Container */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Patient Portal Card */}
        <Link href="/auth/patient/login" className="group block">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {/* Patient Icon (User SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              I am a Patient
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Book appointments, manage visits, and access your medical records.
            </p>
            <div className="mt-8 px-6 py-2.5 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
              Continue as Patient
            </div>
          </div>
        </Link>

        {/* Doctor Portal Card */}
        <Link href="/auth/doctor/login" className="group block">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-500 transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              {/* Doctor Icon (Stethoscope/Medical SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">I am a Doctor</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Manage clinical appointments, patients, and your clinical
              schedule.
            </p>
            <div className="mt-8 px-6 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
              Continue as Doctor
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-10 text-center text-sm text-slate-400">
        Need help? Contact support
      </p>
    </div>
  );
}
