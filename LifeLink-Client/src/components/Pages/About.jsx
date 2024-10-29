// src/About.js

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-6xl">
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">About Life Link</h1>

        {/* Introduction Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          <span className="font-bold text-blue-600">Life Link (LL)</span> is an innovative web-based platform 
          dedicated to revolutionizing the management and storage of critical information related to blood 
          donations and inventory in blood banks. Our mission is to ensure that every hospital has immediate 
          access to safe and tested blood whenever needed, ultimately saving lives and improving patient care.
        </p>

        {/* Our Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center">
            <div className="text-blue-600 text-6xl mb-4 font-bold">♥</div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To enhance the efficiency and reliability of blood donation processes, ensuring that hospitals 
              can quickly access the vital resources they need to provide lifesaving care.
            </p>
          </div>

          <div className="text-center">
            <div className="text-blue-600 text-6xl mb-4 font-bold">🏥</div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To create a world where every healthcare provider has seamless access to blood supplies, 
              facilitating timely treatments and ultimately improving patient outcomes.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
          <ul className="text-gray-600 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our operations.</li>
            <li><strong>Accountability:</strong> We take responsibility for our actions and their impacts on the community.</li>
            <li><strong>Innovation:</strong> We embrace change and continually seek to improve our technology and processes.</li>
            <li><strong>Collaboration:</strong> We partner with hospitals and blood banks to achieve our shared goals.</li>
          </ul>
        </div>

        {/* Why Choose Life Link Section */}
        <div className="text-center">
          <div className="text-blue-600 text-6xl mb-4 font-bold">💡</div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Life Link?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            By centralizing and streamlining the blood donation process, <span className="font-bold text-blue-600">Life Link (LL)</span> plays a crucial 
            role in empowering healthcare providers. Our platform enhances the reliability and responsiveness 
            of blood transfusion services, ensuring that patients receive the timely care they need. Together, 
            we can build a safer, healthier community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
