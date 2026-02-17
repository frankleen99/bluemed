"use client";

import PatientNavbar from "@/app/components/layout/PatientNavbar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <PatientNavbar />

      {/* Main Content */}
      <main className="pt-16 pb-20 px-4 max-w-7xl mx-auto">{children}</main>

      {/* Bottom Nav (mobile-first) */}
    </div>
  );
}
