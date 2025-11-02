
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Donation } from '../types';

interface ThankYouPageProps {
  donation: Donation | null;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ donation }) => {
  if (!donation) {
    // If user lands here directly without donating, redirect to home.
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-2xl w-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you, <span className="font-bold text-teal-600">{donation.name}</span>, for your generous donation of <span className="font-bold text-teal-600">${donation.amount.toLocaleString()}</span>!
        </p>
        <p className="text-md text-gray-500 mb-8">
          Your support helps us make a real difference. A receipt has been sent to your registered email (for demonstration purposes).
        </p>
        <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Back to Home
            </Link>
            <Link
              to="/summary"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              View Summary
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
