
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Clean Water for All
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Help us bring clean and safe drinking water to communities in need. Every drop counts, and so does every dollar.
        </p>
        <div className="bg-slate-100 p-6 rounded-lg mb-8">
          <p className="text-xl font-semibold text-gray-700">Campaign Goal</p>
          <p className="text-5xl font-bold text-teal-600 mt-2">$50,000</p>
        </div>
        <Link
          to="/donate"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
