"use client";

import Link from "next/link";
import { PiBabyBold } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { PiGenderFemaleBold } from "react-icons/pi";

const specialties = [
  {
    name: "Cardiology",
    icon: FaHeartbeat,
    description: "Heart & blood pressure care",
    slug: "cardiology",
  },
  {
    name: "Dermatology",
    icon: MdOutlineFaceRetouchingNatural,
    description: "Skin, hair & nail treatments",
    slug: "dermatology",
  },
  {
    name: "Pediatrics",
    icon: PiBabyBold,
    description: "Healthcare for children",
    slug: "pediatrics",
  },
  {
    name: "Gynecology",
    icon: PiGenderFemaleBold,
    description: "Women’s reproductive health",
    slug: "gynecology",
  },
  {
    name: "Orthopedics",
    icon: LuBone,
    description: "Bones, joints & muscles",
    slug: "orthopedics",
  },
  {
    name: "Psychiatry",
    icon: GiBrain,
    description: "Mental health & wellbeing",
    slug: "psychiatry",
  },
];

export default function PopularSpecialties() {
  return (
    <section
      id="find-doctors"
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
            Popular Specialties
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Not sure who to book? Explore by specialty.
          </p>
        </div>

        {/* Specialty Cards */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;

            return (
              <Link
                key={specialty.slug}
                href={`/doctors?specialty=${specialty.slug}`}
                className="group min-w-[220px] md:min-w-0 bg-gradient-to-tr from-white to-blue-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-start justify-between shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <Icon className="text-4xl md:text-5xl mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />

                {/* Name */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {specialty.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">
                  {specialty.description}
                </p>

                {/* CTA */}
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                  Find doctors →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
