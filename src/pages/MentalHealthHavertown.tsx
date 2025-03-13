import React from "react";
import { Link } from "react-router-dom";

const MentalHealthHavertown = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-yellow-600">
        Expert Mental Health Services in Havertown, PA
      </h1>
      <p className="mt-4 text-gray-700">
        Sunrise Human Care provides compassionate therapy, counseling, and psychiatric care 
        for individuals and families in Havertown, PA. Our licensed professionals specialize 
        in treating anxiety, depression, and stress with personalized in-person and virtual sessions.
      </p>
      <Link to="/appointment" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600">
        Book an Appointment
      </Link>
    </div>
  );
};

export default MentalHealthHavertown;
