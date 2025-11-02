
import React from 'react';
import { Donation } from '../types';

interface SummaryPageProps {
  donations: Donation[];
}

const SummaryPage: React.FC<SummaryPageProps> = ({ donations }) => {
  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Donation Summary
        </h2>
        <div className="divide-y divide-gray-200">
          {donations.length > 0 ? (
            donations.map((donation) => (
              <div key={donation.id} className="py-4 flex justify-between items-center">
                <p className="text-lg text-gray-700">{donation.name}</p>
                <p className="text-lg font-semibold text-teal-600">
                  ${donation.amount.toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No donations yet.</p>
          )}
        </div>
        <div className="mt-6 pt-6 border-t-2 border-teal-500 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">Total</p>
          <p className="text-2xl font-bold text-teal-600">
            ${totalAmount.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
