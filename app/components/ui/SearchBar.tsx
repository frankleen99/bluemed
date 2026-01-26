"use client";
import React, { useState } from "react";
import { Button } from "./Buttons";

interface SearchData {
  name: string;
  specialty: string;
  location: string;
}

const SearchBar = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    name: "",
    specialty: "",
    location: "",
  });

  const handleInputChange = (field: keyof SearchData, value: string) => {
    setSearchData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Search Bar Container */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-[18px] flex flex-col lg:flex-row items-stretch shadow-lg">
          {/* Name Input */}
          <div className="flex-1 px-4 py-3 lg:px-6 lg:border-r border-white/30 flex flex-col justify-center">
            <label
              className="block text-sm font-bold text-gray-900 mb-1 drop-shadow-md"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Input doctor name"
              value={searchData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none drop-shadow-sm"
            />
          </div>

          {/* Specialty Input */}
          <div className="flex-1 px-4 py-3 lg:px-6 lg:border-r border-white/30 flex flex-col justify-center">
            <label
              className="block text-sm font-bold text-gray-900 mb-1 drop-shadow-md"
              htmlFor="specialty"
            >
              Specialty
            </label>
            <input
              type="text"
              placeholder="Specialty (e.g. Cardiologist)"
              value={searchData.specialty}
              onChange={(e) =>
                handleInputChange("specialty", e.target.value)
              }
              onKeyPress={handleKeyPress}
              className="w-full text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none drop-shadow-sm"
            />
          </div>

          {/* Location Input */}
          <div className="flex-1 px-4 py-3 lg:px-6 flex flex-col justify-center">
            <label
              className="block text-sm font-bold text-gray-900 mb-1 drop-shadow-md"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Enter a Location"
              value={searchData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none drop-shadow-sm"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center px-3 py-3 lg:py-0">
            <Button
              onClick={handleSearch}
              className="bg-blue-600/90 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap w-full lg:w-auto drop-shadow-md"
              type="button"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
