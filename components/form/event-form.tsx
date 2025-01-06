"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "react-hot-toast";

type FormData = {
  name: string;
  description: string;
  type: "in-person" | "phone-call";
  start: string;
  end: string;
};

const EventForm: React.FC = () => {
  const createEvent = useMutation(api.event.CreateEvent);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    type: "in-person",
    start: "",
    end: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1); // Track the current step

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData({ name: "", description: "", type: "in-person", start: "", end: "" });
    setStep(1); // Reset to the first step
  };

  const handleNext = () => {
    if (step === 3) {
      handleSubmit(); // Submit on the last step
    } else {
      setStep(step + 1); // Move to the next step
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await createEvent({
        name: formData.name,
        description: formData.description,
        type: formData.type,
        start: formData.start,
        end: formData.end,
      });
      toast.success("Event created successfully!");
      handleCancel(); // Reset form after submission
    } catch (error: any) {
      console.error("Error creating event:", error);
      toast.error(`Failed to create event: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Create Event</h1>

      {/* Progress Indicator */}
      <div className="flex justify-between mb-6">
        <div
          className={`w-1/3 h-2 ${
            step >= 1 ? "bg-blue-500" : "bg-gray-300"
          } rounded-full`}
        ></div>
        <div
          className={`w-1/3 h-2 ${
            step >= 2 ? "bg-blue-500" : "bg-gray-300"
          } rounded-full mx-2`}
        ></div>
        <div
          className={`w-1/3 h-2 ${
            step === 3 ? "bg-blue-500" : "bg-gray-300"
          } rounded-full`}
        ></div>
      </div>

      <form className="flex flex-col space-y-4">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <label htmlFor="type" className="block text-sm font-medium mt-4">
              Event Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="in-person">In-Person</option>
              <option value="phone-call">Phone Call</option>
            </select>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <label htmlFor="start" className="block text-sm font-medium">
              Start Time
            </label>
            <input
              type="datetime-local"
              name="start"
              id="start"
              value={formData.start}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="end" className="block text-sm font-medium mt-4">
              End Time
            </label>
            <input
              type="datetime-local"
              name="end"
              id="end"
              value={formData.end}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isSubmitting}
            className={`px-4 py-2 ${
              step === 3
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } rounded-lg`}
          >
            {isSubmitting ? "Submitting..." : step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
