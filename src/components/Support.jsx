import React, { useState } from 'react';

const Support = () => {
  // State for dropdown selection and postal code input
  const [county, setCounty] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // List of UK counties for the dropdown
  const counties = [
    'Aberdeen City', 'Aberdeenshire', 'Angus', 'Argyll and Bute', 'Belfast',
    'Bridgend', 'Bristol', 'Cambridge', 'Cardiff', 'Derry', 'East Lothian',
    'East Sussex', 'Essex', 'Fife', 'Glasgow', 'Greater London', 'Hampshire',
    'Kent', 'Lancashire', 'Leeds', 'Liverpool', 'Manchester', 'Middlesbrough',
    'Newcastle upon Tyne', 'North Ayrshire', 'Northumberland', 'Nottingham',
    'Oxford', 'Perth and Kinross', 'Somerset', 'South Lanarkshire', 'South Yorkshire',
    'Stirling', 'Surrey', 'West Midlands', 'West Sussex', 'West Yorkshire', 'Windsor and Maidenhead'
  ];

  return (
    <div className="flex items-start justify-center h-screen bg-gray-100" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      {/* Container for the top 2/3 of the screen */}
      <div className="bg-amber-500 rounded-lg shadow-lg w-full max-w-4xl lg:max-w-6xl flex flex-col justify-center" style={{ height: '66.67vh', padding: '2rem' }}>
        {/* Title and Contact Us Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 className="text-3xl font-bold" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Do you have a question or need support?</h1>
          <div style={{ textAlign: 'center' }}>
            <button 
              className="bg-blue-500 text-white rounded-md hover:bg-blue-600"
              style={{ padding: '10px 20px', marginBottom: '1.5rem' }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="text-center" style={{ marginBottom: '1.5rem' }}>
          <h3 className="text-xl font-semibold" style={{ marginBottom: '1rem' }}>View local tradespeople in your area</h3>
          
          {/* Dropdown for selecting county */}
          <div style={{ marginBottom: '1rem' }}>
            <select 
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            >
              <option value="" disabled>Select a county</option>
              {counties.map((county, index) => (
                <option key={index} value={county}>{county}</option>
              ))}
            </select>
          </div>

          {/* Postal code input */}
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Postal Code (e.g., 12345)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          {/* Search Traders Button */}
          <button 
            className="bg-green-500 text-white rounded-md hover:bg-green-600"
            style={{ padding: '10px 20px' }}
          >
            Search Traders
          </button>
        </div>

        {/* Logo */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <img 
            src="https://tradehub24.com/profile_images/logo.png" 
            alt="TradeHub24 Logo"
            className="mx-auto w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
