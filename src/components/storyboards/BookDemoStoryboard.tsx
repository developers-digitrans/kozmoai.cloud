import React from "react";
import BookDemoModal from "@/components/BookDemoModal";
import { Button } from "@/components/ui/button";

export default function BookDemoStoryboard() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-[#121212] p-8 rounded-xl border border-purple-500/20 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">
          Book a Demo Integration
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Default Button
          </h2>
          <div className="flex items-center space-x-4">
            <BookDemoModal />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">Custom Text</h2>
          <div className="flex items-center space-x-4">
            <BookDemoModal buttonText="Schedule a Call" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Custom Styling
          </h2>
          <div className="flex items-center space-x-4">
            <BookDemoModal
              buttonText="Book Your Demo"
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            />
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700 mt-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Implementation Notes
          </h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>The modal uses Cal.com for scheduling integration</li>
            <li>
              Configure environment variables in{" "}
              <code className="bg-[#2A2A2A] px-1 py-0.5 rounded">
                VITE_CAL_USERNAME
              </code>
              ,{" "}
              <code className="bg-[#2A2A2A] px-1 py-0.5 rounded">
                VITE_CAL_API_KEY
              </code>
              , etc.
            </li>
            <li>The component handles loading states and errors gracefully</li>
            <li>Fully accessible with keyboard navigation support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
