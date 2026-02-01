// components/layout/PatientNavbar.tsx
import Link from "next/link";

export default function PatientNavbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <Link href="/patient" className="text-xl font-bold text-blue-600">
        BlueMed
      </Link>

      <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
        <Link href="/patient/appointments">Appointments</Link>
        <Link href="/patient/doctors">Doctors</Link>
        <Link href="/patient/messages">Messages</Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-slate-500">🔔</button>
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          U
        </div>
      </div>
    </header>
  );
}
