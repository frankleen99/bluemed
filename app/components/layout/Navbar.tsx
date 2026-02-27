// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { Button } from "../ui/Buttons";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const navLinks = [
// //     { name: "Find Doctors", href: "/#find-doctors" },
// //     { name: "How it Works", href: "/how-it-works" },
// //     { name: "About", href: "/about" },
// //   ];

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex h-16 items-center justify-between">

// //           {/* Logo */}
// //           {/* <Link href="/" className="text-2xl font-bold text-blue-600 drop-shadow-md">
// //             BlueMed
// //           </Link> */}
// //             {/* Logo top-left */}
// //         <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
// //           <span className="text-white font-semibold text-lg tracking-wide drop-shadow" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
// //            BlueMed
// //           </span>
// //         </div>

// //           {/* Center Links (Desktop) */}
// //           <div className="hidden md:flex space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 className="text-gray-900 hover:text-blue-600 font-medium drop-shadow-md transition"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Auth Buttons (Desktop) */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             <Link
// //               href="/signin"
// //               className="text-gray-900 hover:text-blue-600 font-medium drop-shadow-md"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               href="/register"
// //               className="bg-white/90 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white drop-shadow-md transition"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <Button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="md:hidden text-gray-900 focus:outline-none drop-shadow-md"
// //           >
// //             {isOpen ? "✕" : "☰"}
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white/30 backdrop-blur-md shadow-lg border-t border-white/30">
// //           <div className="px-4 py-4 space-y-3">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 href={link.href}
// //                 onClick={() => setIsOpen(false)}
// //                 className="block text-gray-900 font-medium drop-shadow-md"
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}

// //             <hr className="border-white/30" />

// //             <Link
// //               href="/signin"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-gray-900 font-medium drop-shadow-md"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               href="/signup"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold drop-shadow-md"
// //             >
// //               Sign Up
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "../ui/Buttons";
// import { FaUser, FaUserMd, FaShieldAlt } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa6";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Find Doctors", href: "/#find-doctors" },
//     { name: "How it Works", href: "/how-it-works" },
//     { name: "About", href: "/about" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between relative">

//           {/* Logo */}
//           <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
//             <span
//               className="text-white font-semibold text-lg tracking-wide drop-shadow"
//               style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
//             >
//               BlueMed
//             </span>
//           </div>

//           {/* Center Links (Desktop) */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-900 hover:text-blue-600 font-medium drop-shadow-md transition"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Auth Section */}
//           <div className="hidden md:flex items-center space-x-6 relative">

//             {/* Hover Dropdown */}
//             <div className="relative group">
//               {/* Trigger */}
//               <button className="flex items-center gap-2 text-gray-900 hover:text-blue-600 font-medium drop-shadow-md transition">
//                  <FaRegUser className="text-blue-600 text-2xl" />
//               </button>

//               {/* Dropdown */}
//               <div
//                 className="
//                   absolute right-0 mt-4 w-56
//                   opacity-0 invisible translate-y-2 scale-95
//                   group-hover:opacity-100 group-hover:visible
//                   group-hover:translate-y-0 group-hover:scale-100
//                   transition-all duration-200 origin-top
//                   backdrop-blur-xl bg-white/80
//                   border border-white/40
//                   shadow-2xl rounded-2xl p-2
//                 "
//               >
//                 {/* Arrow */}
//                 <div className="absolute -top-2 right-6 w-4 h-4 bg-white/80 rotate-45 border-l border-t border-white/40"></div>

//                 <Link
//                   href="/signin/patient"
//                   className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
//                 >
//                   <FaUser className="text-blue-600 text-sm" />
//                   <span>Patient Login</span>
//                 </Link>

//                 <Link
//                   href="/signin/doctor"
//                   className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
//                 >
//                   <FaUserMd className="text-blue-600 text-sm" />
//                   <span>Doctor Login</span>
//                 </Link>

//                 <Link
//                   href="/signin/admin"
//                   className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
//                 >
//                   <FaShieldAlt className="text-blue-600 text-sm" />
//                   <span>Admin Login</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Sign Up */}
//             <Link
//               href="/signup"
//               className="bg-white/90 text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white drop-shadow-md transition"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-900 focus:outline-none drop-shadow-md"
//           >
//             {isOpen ? "✕" : "☰"}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/30 backdrop-blur-md shadow-lg border-t border-white/30">
//           <div className="px-4 py-4 space-y-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block text-gray-900 font-medium drop-shadow-md"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <hr className="border-white/30" />

//             <Link
//               href="/signin/patient"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-900 font-medium"
//             >
//               Patient Login
//             </Link>

//             <Link
//               href="/signin/doctor"
//               onClick={() => setIsOpen(false)}
//               className="block text-gray-900 font-medium"
//             >
//               Doctor Login
//             </Link>

//             <Link
//               href="/signup"
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { FaTimes } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa6";

// // ─────────────────────────────────────────────
// // RIPPLE HOOK
// // ─────────────────────────────────────────────
// function useRipple() {
//   function createRipple(e: React.MouseEvent<HTMLElement>) {
//     const el = e.currentTarget;
//     const existing = el.querySelector(".ripple");
//     if (existing) existing.remove();

//     const rect = el.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const ripple = document.createElement("span");

//     ripple.className = "ripple";
//     ripple.style.cssText = `
//       width: ${size}px;
//       height: ${size}px;
//       left: ${e.clientX - rect.left - size / 2}px;
//       top: ${e.clientY - rect.top - size / 2}px;
//     `;

//     el.appendChild(ripple);
//     ripple.addEventListener("animationend", () => ripple.remove());
//   }

//   return createRipple;
// }

// // ─────────────────────────────────────────────
// // NAVBAR
// // ─────────────────────────────────────────────
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const ripple = useRipple();

//   const navLinks = [
//     { name: "Find Doctors", href: "/#find-doctors" },
//     { name: "How it Works", href: "/how-it-works" },
//     { name: "About", href: "/about" },
//   ];

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [isOpen]);

//   return (
//     <>
//       {/* ── Ripple styles injected once ── */}
//       <style>{`\
//         .ripple {
//           position: absolute;
//           border-radius: 50%;
//           transform: scale(0);
//           animation: ripple-animation 600ms linear forwards;
//           background-color: rgba(0, 0, 0, 0.15);
//           pointer-events: none;
//           will-change: transform, opacity;
//         }
//         @keyframes ripple-animation {
//           from { transform: scale(0); opacity: 1; }
//           to   { transform: scale(4); opacity: 0; }
//         }
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.95) translateY(8px); }
//           to   { opacity: 1; transform: scale(1)    translateY(0); }
//         }
//         .animate-scaleIn {
//           animation: scaleIn 180ms ease-out forwards;
//         }
//       `}</style>

//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">

//             {/* ── Logo ── */}
//             <Link
//               href="/"
//               className="flex items-center gap-2 shrink-0"
//               aria-label="BlueMed home"
//             >
//               <span
//                 className="text-blue-600 font-semibold text-lg tracking-wide drop-shadow select-none"
//                 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
//               >
//                 BlueMed
//               </span>
//             </Link>

//             {/* ── Desktop nav links ── */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-150"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* ── Desktop account dropdown ── */}
//             <div className="hidden md:flex items-center">
//               {/* group wraps the button + dropdown so hover keeps it open */}
//               <div className="relative group">
//                 <button
//                   aria-label="Account menu"
//                   aria-haspopup="true"
//                   className="relative overflow-hidden flex items-center justify-center w-9 h-9 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
//                   onClick={ripple}
//                 >
//                   <FaRegUser className="text-blue-600 text-xl" />
//                 </button>

//                 {/* Dropdown panel */}
//                 <div
//                   className="
//                     absolute right-0 top-full mt-3 w-56
//                     opacity-0 invisible translate-y-2 scale-95
//                     group-hover:opacity-100 group-hover:visible
//                     group-hover:translate-y-0 group-hover:scale-100
//                     transition-all duration-200 origin-top-right
//                     backdrop-blur-xl bg-white/90
//                     border border-white/40
//                     shadow-2xl rounded-2xl p-2 z-50
//                   "
//                   role="menu"
//                 >
//                   {/* Caret */}
//                   <div className="absolute -top-2 right-5 w-4 h-4 bg-white/90 rotate-45 border-l border-t border-white/40 rounded-sm" />

//                   <div className="px-4 pt-3 pb-3 border-b border-slate-100">
//                     <p className="font-semibold text-slate-800 text-sm">Welcome</p>
//                     <p className="text-xs text-slate-400 mt-0.5">Choose an option below</p>
//                   </div>

//                   <button
//                     onClick={() => setShowLoginModal(true)}
//                     className="
//                       relative overflow-hidden w-full text-left
//                       flex items-center gap-3 px-4 py-2.5 mt-2
//                       rounded-lg border border-blue-500 text-blue-600
//                       font-semibold text-sm hover:bg-blue-50
//                       transition-colors duration-150 focus:outline-none
//                     "
//                     role="menuitem"
//                     onClick={(e) => { ripple(e); setShowLoginModal(true); }}
//                   >
//                     Sign In
//                   </button>

//                   <Link
//                     href="/register"
//                     className="
//                       relative overflow-hidden
//                       flex items-center gap-3 px-4 py-2.5 mt-2
//                       bg-blue-500 hover:bg-blue-600 text-white
//                       font-semibold text-sm rounded-lg
//                       transition-colors duration-150
//                     "
//                     role="menuitem"
//                     onClick={ripple}
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* ── Mobile hamburger ── */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               className="md:hidden relative overflow-hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
//               onMouseDown={ripple}
//             >
//               <span className="text-xl select-none">{isOpen ? "✕" : "☰"}</span>
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile menu ── */}
//         <div
//           className={`
//             md:hidden overflow-hidden
//             transition-all duration-300 ease-in-out
//             ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
//             bg-white/30 backdrop-blur-md border-t border-white/30
//           `}
//           aria-hidden={!isOpen}
//         >
//           <div className="px-4 py-4 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2.5 rounded-lg text-gray-900 font-medium hover:bg-white/40 transition-colors duration-150"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <hr className="border-white/30 my-2" />

//             <button
//               onClick={() => { setIsOpen(false); setShowLoginModal(true); }}
//               className="w-full text-left px-3 py-2.5 rounded-lg text-gray-900 font-medium hover:bg-white/40 transition-colors duration-150"
//             >
//               Sign In
//             </button>

//             <Link
//               href="/register"
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors duration-150"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* ── Login modal ── */}
//       {showLoginModal && (
//         <LoginModal onClose={() => setShowLoginModal(false)} />
//       )}
//     </>
//   );
// }

// // ─────────────────────────────────────────────
// // LOGIN MODAL
// // ─────────────────────────────────────────────
// function LoginModal({ onClose }: { onClose: () => void }) {
//   const modalRef = useRef<HTMLDivElement>(null);

//   // Close on click-outside
//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
//         onClose();
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [onClose]);

//   // Close on Escape
//   useEffect(() => {
//     function handleKey(e: KeyboardEvent) {
//       if (e.key === "Escape") onClose();
//     }
//     document.addEventListener("keydown", handleKey);
//     return () => document.removeEventListener("keydown", handleKey);
//   }, [onClose]);

//   // Lock body scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="modal-title"
//     >
//       <div
//         ref={modalRef}
//         className="
//           bg-white rounded-3xl shadow-2xl p-8
//           w-[92%] max-w-2xl
//           max-h-[90vh] overflow-y-auto
//           relative animate-scaleIn
//         "
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           aria-label="Close modal"
//           className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-800 hover:bg-slate-100 transition-colors duration-150"
//         >
//           <FaTimes />
//         </button>

//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1
//             id="modal-title"
//             className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900"
//           >
//             Sign into{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
//               BlueMed
//             </span>
//           </h1>
//           <p className="text-slate-500 mt-3 text-base">
//             Choose how you want to access the platform
//           </p>
//         </div>

//         {/* Portal cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

//           {/* Patient */}
//           <Link href="/auth/patient/login" className="group block">
//             <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 h-full flex flex-col items-center text-center">
//               <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold text-slate-800">I am a Patient</h2>
//               <p className="mt-3 text-slate-500 text-sm leading-relaxed">
//                 Book appointments, manage visits, and access your medical records.
//               </p>
//               <div className="mt-6 px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full text-sm font-medium shadow-md shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
//                 Continue as Patient
//               </div>
//             </div>
//           </Link>

//           {/* Doctor */}
//           <Link href="/auth/doctor/login" className="group block">
//             <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all duration-300 h-full flex flex-col items-center text-center">
//               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold text-slate-800">I am a Doctor</h2>
//               <p className="mt-3 text-slate-500 text-sm leading-relaxed">
//                 Manage clinical appointments, patients, and your schedule.
//               </p>
//               <div className="mt-6 px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full text-sm font-medium shadow-md shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105">
//                 Continue as Doctor
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type Role = "patient" | "doctor";
type ModalStep = "role" | "form";

// ─────────────────────────────────────────────
// RIPPLE HOOK
// ─────────────────────────────────────────────
// function useRipple() {
//   function createRipple(e: React.MouseEvent<HTMLElement>) {
//     const el = e.currentTarget;
//     const existing = el.querySelector(".ripple");
//     if (existing) existing.remove();

//     const rect = el.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const ripple = document.createElement("span");

//     ripple.className = "ripple";
//     ripple.style.cssText = `
//       width: ${size}px;
//       height: ${size}px;
//       left: ${e.clientX - rect.left - size / 2}px;
//       top: ${e.clientY - rect.top - size / 2}px;
//     `;

//     el.appendChild(ripple);
//     ripple.addEventListener("animationend", () => ripple.remove());
//   }

//   return createRipple;
// }

// ─────────────────────────────────────────────
// SHARED MODAL SHELL
// Handles: click-outside, Escape key, scroll lock
// ─────────────────────────────────────────────
function ModalShell({
  children,
  onClose,
  labelId,
  maxWidth = "max-w-2xl",
}: {
  children: React.ReactNode;
  onClose: () => void;
  labelId: string;
  maxWidth?: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-3xl shadow-2xl w-[92%] ${maxWidth} max-h-[90vh] overflow-y-auto relative animate-scaleIn`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-800 hover:bg-slate-100 transition-colors duration-150 z-10"
        >
          <FaTimes />
        </button>

        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ROLE SELECTION MODAL
// ─────────────────────────────────────────────
function RoleModal({
  onClose,
  onSelectRole,
}: {
  onClose: () => void;
  onSelectRole: (role: Role) => void;
}) {
  return (
    <ModalShell onClose={onClose} labelId="role-modal-title">
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            id="role-modal-title"
            className="text-3xl md:text-4xl font-extrabold uppercase text-slate-900"
          >
            Sign into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              BlueMed
            </span>
          </h1>
          <p className="text-slate-500 mt-3 text-base">
            Choose how you want to access the platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Patient card */}
          <button
            onClick={() => onSelectRole("patient")}
            className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-400 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
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
              <h2 className="text-xl font-bold text-slate-800">
                I am a Patient
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                Book appointments, manage visits, and access your medical
                records.
              </p>
              <div className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600">
                Continue as Patient
              </div>
            </div>
          </button>

          {/* Doctor card */}
          <button
            onClick={() => onSelectRole("doctor")}
            className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-indigo-400 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
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
              <h2 className="text-xl font-bold text-slate-800">
                I am a Doctor
              </h2>
              <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                Manage clinical appointments, patients, and your schedule.
              </p>
              <div className="mt-6 px-5 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium shadow-md shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-600">
                Continue as Doctor
              </div>
            </div>
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

// ─────────────────────────────────────────────
// LOGIN FORM MODAL
// ─────────────────────────────────────────────
const ROLE_META = {
  patient: {
    label: "Patient",
    emailPlaceholder: "patient@example.com",
    registerHref: "/register/patient",
    forgotHref: "/forgot-password/patient",
    submitHref: "/patientUi/home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
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
    ),
  },
  doctor: {
    label: "Doctor",
    emailPlaceholder: "doctor@hospital.com",
    registerHref: "/register/doctor",
    forgotHref: "/forgot-password/doctor",
    submitHref: "/doctorUi/home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
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
    ),
  },
} as const;

function LoginFormModal({
  role,
  onClose,
  onBack,
}: {
  role: Role;
  onClose: () => void;
  onBack: () => void;
}) {
  const meta = ROLE_META[role];
  const isBlue = role === "patient";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  // Tailwind variant strings
  const accentBorder = isBlue ? "border-blue-500" : "border-indigo-500";
  const accentText = isBlue ? "text-blue-600" : "text-indigo-600";
  const accentBg = isBlue ? "bg-blue-50" : "bg-indigo-50";
  const btnClass = isBlue
    ? "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500"
    : "bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500";
  const inputFocus = isBlue
    ? "focus:ring-blue-400 focus:border-blue-400"
    : "focus:ring-indigo-400 focus:border-indigo-400";
  const linkColor = isBlue
    ? "text-blue-600 hover:text-blue-800"
    : "text-indigo-600 hover:text-indigo-800";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);
    try {
      // await signIn(role, { email, password });
      await new Promise((r) => setTimeout(r, 1000)); // simulate network
      window.location.href = meta.submitHref;
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ModalShell
      onClose={onClose}
      labelId="form-modal-title"
      maxWidth="max-w-md"
    >
      <div className="p-8">
        {/* Back + role badge */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={onBack}
            aria-label="Back to role selection"
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 text-sm font-medium transition-colors duration-150"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </button>
          <span className="text-slate-200 select-none">|</span>
          <span
            className={`flex items-center gap-2 text-sm font-semibold ${accentText}`}
          >
            <span
              className={`w-7 h-7 rounded-lg flex items-center justify-center ${accentBg} ${accentText}`}
            >
              {meta.icon}
            </span>
            {meta.label} Portal
          </span>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h2
            id="form-modal-title"
            className="text-2xl font-extrabold text-slate-900"
          >
            Welcome back
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Sign in to your {meta.label.toLowerCase()} account to continue.
          </p>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mb-5 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 animate-scaleIn">
            <svg
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V7a1 1 0 012 0v2a1 1 0 01-2 0zm0 4a1 1 0 112 0 1 1 0 01-2 0z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-sm text-slate-600 block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-600 block mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="accent-blue-500 w-4 h-4"
            />
            <span className="text-sm text-slate-600">Remember me</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`
              relative overflow-hidden w-full py-3 rounded-xl
              text-white font-semibold text-sm
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              transition-all duration-200
              disabled:opacity-60 disabled:cursor-not-allowed
              ${btnClass}
            `}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Signing in…
              </span>
            ) : (
              `Sign in as ${meta.label}`
            )}
          </button>

          {/* RIGHT SIDE - IMAGE PANEL */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/patientLogin.webp"
              alt="Healthcare professional"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href={meta.registerHref}
            className={`font-semibold ${linkColor} transition-colors duration-150`}
          >
            Create one
          </Link>
        </p>
      </div>
    </ModalShell>
  );
}

// ─────────────────────────────────────────────
// AUTH FLOW ORCHESTRATOR
// Manages the role → form step transition
// ─────────────────────────────────────────────
function AuthFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<ModalStep>("role");
  const [role, setRole] = useState<Role | null>(null);

  function handleSelectRole(r: Role) {
    setRole(r);
    setStep("form");
  }

  if (step === "form" && role) {
    return (
      <LoginFormModal
        role={role}
        onClose={onClose}
        onBack={() => setStep("role")}
      />
    );
  }

  return <RoleModal onClose={onClose} onSelectRole={handleSelectRole} />;
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthFlow, setShowAuthFlow] = useState(false);
 

  const navLinks = [
    { name: "Find Doctors", href: "/#find-doctors" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Injected global styles ── */}
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-animation 600ms linear forwards;
          background-color: rgba(0, 0, 0, 0.15);
          pointer-events: none;
          will-change: transform, opacity;
        }
        @keyframes ripple-animation {
          from { transform: scale(0); opacity: 1; }
          to   { transform: scale(4); opacity: 0; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);   }
        }
        .animate-scaleIn {
          animation: scaleIn 180ms ease-out forwards;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="BlueMed home"
            >
              <span
                className="text-blue-700 font-bold text-lg tracking-wide drop-shadow select-none"
              >
                BlueMed
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop account dropdown */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <button
                  aria-label="Account menu"
                  aria-haspopup="true"
                  className="relative overflow-hidden flex items-center justify-center w-9 h-9 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <FaRegUser className="text-blue-600 text-xl" />
                </button>

                <div
                  className="
                    absolute right-0 top-full mt-3 w-56
                    opacity-0 invisible translate-y-2 scale-95
                    group-hover:opacity-100 group-hover:visible
                    group-hover:translate-y-0 group-hover:scale-100
                    transition-all duration-200 origin-top-right
                    backdrop-blur-xl bg-white/90
                    border border-white/40
                    shadow-2xl rounded-2xl p-2 z-50
                  "
                  role="menu"
                >
                  {/* Caret */}
                  <div className="absolute -top-2 right-5 w-4 h-4 bg-white/90 rotate-45 border-l border-t border-white/40 rounded-sm" />

                  <div className="px-4 pt-3 pb-3 border-b border-slate-100">
                    <p className="font-semibold text-slate-800 text-sm">
                      Welcome
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Choose an option below
                    </p>
                  </div>

                  <button
                    role="menuitem"
                    onClick={(e) => {
                      setShowAuthFlow(true);
                    }}
                    className="
                      relative overflow-hidden w-full text-left
                      flex items-center gap-3 px-4 py-2.5 mt-2
                      rounded-lg border border-blue-500 text-blue-600
                      font-semibold text-sm hover:bg-blue-50
                      transition-colors duration-150 focus:outline-none
                    "
                  >
                    Sign In
                  </button>

                  <Link
                    href="/register"
                    role="menuitem"
                    className="
                      relative overflow-hidden
                      flex items-center gap-3 px-4 py-2.5 mt-2
                      bg-blue-500 hover:bg-blue-600 text-white
                      font-semibold text-sm rounded-lg
                      transition-colors duration-150
                    "
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden relative overflow-hidden flex items-center justify-center w-9 h-9 rounded-full text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="text-xl select-none">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            bg-white/30 backdrop-blur-md border-t border-white/30
          `}
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-gray-900 font-medium hover:bg-white/40 transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}

            <hr className="border-white/30 my-2" />

            <button
              onClick={() => {
                setIsOpen(false);
                setShowAuthFlow(true);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-gray-900 font-medium hover:bg-white/40 transition-colors duration-150"
            >
              Sign In
            </button>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors duration-150"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Auth flow: role selection → login form */}
      {showAuthFlow && <AuthFlow onClose={() => setShowAuthFlow(false)} />}
    </>
  );
}
