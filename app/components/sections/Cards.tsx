import React from 'react';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  rating: number;
  availableToday: boolean;
}

const Card = ({ image, name, specialty, rating, availableToday }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600 mb-3">{specialty}</p>
      
      <div className="flex items-center gap-1 mb-3">
        <span className="text-yellow-400 text-xl">⭐</span>
        <span className="font-medium text-gray-700">{rating}</span>
      </div>
      
      {availableToday && (
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Available Today
        </span>
      )}
      
      <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
        Book Appointment
      </button>
    </div>
  );
};

export default function DoctorCards() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      availableToday: true,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      availableToday: false,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      rating: 5.0,
      availableToday: true,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Dr. James Williams",
      specialty: "Dentist",
      rating: 4.7,
      availableToday: false,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-60 bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <div className="max-w-6xl mx-auto mt-20
      ">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-2 text-center uppercase">Our Doctors</h1>
        <p className="text-gray-600 text-center mb-8">Find the right specialist for your healthcare needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map(doctor => (
            <Card key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}