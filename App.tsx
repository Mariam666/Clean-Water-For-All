
import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { Donation } from './types';
import HomePage from './components/HomePage';
import DonationPage from './components/DonationPage';
import ThankYouPage from './components/ThankYouPage';
import SummaryPage from './components/SummaryPage';

const SAMPLE_DONATIONS: Donation[] = [
  { id: 1, name: 'Ahmed', amount: 100 },
  { id: 2, name: 'Sara', amount: 50 },
  { id: 3, name: 'Yusuf', amount: 200 },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/donate', label: 'Donate' },
    { path: '/summary', label: 'Summary' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-teal-600">
              Hope Givers
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <Header />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

function App() {
  const [donations, setDonations] = useState<Donation[]>(SAMPLE_DONATIONS);
  const [lastDonation, setLastDonation] = useState<Donation | null>(null);

  const handleAddDonation = (name: string, amount: number) => {
    const newDonation: Donation = {
      id: Date.now(),
      name,
      amount,
    };
    setDonations(prevDonations => [...prevDonations, newDonation]);
    setLastDonation(newDonation);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="donate" element={<DonationPage onDonate={handleAddDonation} />} />
        <Route path="thankyou" element={<ThankYouPage donation={lastDonation} />} />
        <Route path="summary" element={<SummaryPage donations={donations} />} />
      </Route>
    </Routes>
  );
}

export default App;
