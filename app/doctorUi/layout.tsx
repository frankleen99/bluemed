"use client";
import DoctorNav from "../components/layout/DoctorNav";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <DoctorNav />

      {/* Main Content */}
      <main className="pt-16 pb-20 px-4 max-w-7xl mx-auto">{children}</main>

      {/* Bottom Nav (mobile-first) */}
    </div>
  );
}
