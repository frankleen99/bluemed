"use client";

import { useState } from "react";

const features = [
  {
    title: "Verified Professionals",
    description:
      "All doctors on our platform are carefully screened, licensed, and verified for quality care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V6l7-4z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Specialists",
    description:
      "Access doctors across multiple specialties with years of hands-on medical experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M4 22c0-4 4-7 8-7s8 3 8 7"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Appointments",
    description:
      "Book consultations at times that work best for you, with minimal waiting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Trusted by Patients",
    description:
      "Thousands of patients rely on our platform for reliable and compassionate healthcare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 17l-5 3 1.5-5.5L4 10h6L12 4l2 6h6l-4.5 4.5L17 20z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Patient",
    quote:
      "Booking an appointment was seamless. The doctor was professional, attentive, and genuinely cared about my health.",
    rating: 5,
  },
  {
    name: "David Okeke",
    role: "Patient",
    quote:
      "I found the right specialist within minutes. The experience was smooth from booking to consultation.",
    rating: 4,
  },
  {
    name: "Sarah Williams",
    role: "Patient",
    quote:
      "This platform saved me so much time. I didn’t have to wait in long queues anymore.",
    rating: 5,
  },
];


export default function WhyChooseAndTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const leftIndex =
    activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;

  const rightIndex =
    activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* WHY CHOOSE OUR DOCTORS */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 font-semibold tracking-wide uppercase">
            Why Choose Our Doctors
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900 uppercase">
            Trusted Healthcare Professionals
          </h2>
          <p className="mt-4 text-gray-600">
            We connect you with verified, experienced, and compassionate medical
            professionals.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* TESTIMONIALS */}
        <div className="mt-30 lg:mt-7 rounded-3xl bg-gray-50 px-6 py-24 lg:py-10">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 uppercase">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl uppercase font-semibold text-gray-900">
              What Our Patients Say
            </h2>

            <div className="relative mt-16 flex items-center justify-center gap-6">
              {/* LEFT PREVIEW */}
              <div className="hidden md:block w-64 rounded-2xl bg-white p-6 opacity-40 shadow-sm">
                <div className="text-blue-400 text-3xl">“</div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                  {testimonials[leftIndex].quote}
                </p>
              </div>

              {/* ACTIVE */}
              <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg transition">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-6xl">“</div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT PREVIEW */}
              <div className="hidden md:block w-64 rounded-2xl bg-white p-6 opacity-40 shadow-sm">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-3xl">“</div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                  {testimonials[rightIndex].quote}
                </p>
              </div>

              {/* ARROWS */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 -translate-x-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition"
              >
                ←
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 translate-x-1/2 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 transition"
              >
                →
              </button>
            </div>

            {/* DOTS */}
            <div className="mt-10 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full transition ${
                    index === activeIndex ? "bg-blue-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
