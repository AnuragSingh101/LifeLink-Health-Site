// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-neutral-100 overflow-hidden">
      {/* Background repeating text with improved visibility */}
      <div className="absolute inset-0 opacity-20 text-neutral-700 text-[80px] leading-tight font-extrabold tracking-wide whitespace-nowrap overflow-hidden">
        <div className="animate-scroll">
          {/* Repeating text background */}
          <div className="flex">
            <div className="flex-none">Donate Blood, Save Lives</div><br />
            <div className="flex-none">Donate Blood, Save Lives</div><br />
            <div className="flex-none">Donate Blood, Save Lives</div><br />
            <div className="flex-none">Donate Blood, Save Lives</div><br />
          </div>
        </div>
      </div>

      {/* Centered main content */}
      <div className="relative text-center z-10">
        <h1 className="text-6xl font-bold text-neutral-700 mb-4">LifeLink</h1>
        <p className="text-2xl text-neutral-500 italic">
          "A single pint can save three lives, a single gesture can create a million smiles."
        </p>
      </div>

      {/* Inline styles for keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
