import * as React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Habit + Goal Tracker</h1>
        <p className="mt-4 text-gray-600">
          Track your goals, build habits, and visualize your progress!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};
