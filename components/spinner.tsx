import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="relative w-16 h-16">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
        {/* Inner pulsating dot */}
        <div className="absolute inset-4 bg-gray-500 rounded-full animate-ping"></div>
      </div>
      <p className="mt-4 text-gray-500 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Spinner;
