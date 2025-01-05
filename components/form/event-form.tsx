'use client'
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const EventForm = () => {
  const [step, setStep] = useState(1); // Manage current step
  const [formData, setFormData] = useState({
    name: '', // Event name (for step 1)
  });

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Move to the next step
  const handleNext = () => {
    if (formData.name.trim() === '') {
      alert('Please provide an event name.');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Progress Indicator */}
      <div className="flex items-center mb-6">
        <div
          className={`w-1/2 h-2 ${
            step === 1 ? 'bg-blue-500' : 'bg-gray-300'
          } rounded-full`}
        ></div>
        <div
          className={`w-1/2 h-2 ${
            step === 2 ? 'bg-blue-500' : 'bg-gray-300'
          } rounded-full ml-2`}
        ></div>
      </div>

      {/* Step 1: Event Name */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Step 1: Event Name</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter event name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleNext}
            className="mt-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Next
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      )}

      {/* Placeholder for Step 2 */}
      {step === 2 && <div className="text-center">Step 2 coming soon...</div>}
    </div>
  );
};

export default EventForm;
