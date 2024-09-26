// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Life Link</h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
        Life Link (LL) is an innovative web-based platform dedicated to revolutionizing the management and
        storage of critical information related to blood donations and inventory in blood banks. Our
        mission is to ensure that every hospital has immediate access to safe and tested blood whenever
        needed, ultimately saving lives and improving patient care.
      </p>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          To enhance the efficiency and reliability of blood donation processes, ensuring that hospitals can
          quickly access the vital resources they need to provide lifesaving care.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Our Vision</h2>
        <p className="text-gray-600 mb-4">
          To create a world where every healthcare provider has seamless access to blood supplies, 
          facilitating timely treatments and ultimately improving patient outcomes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our operations.</li>
          <li><strong>Accountability:</strong> We take responsibility for our actions and their impacts on the community.</li>
          <li><strong>Innovation:</strong> We embrace change and continually seek to improve our technology and processes.</li>
          <li><strong>Collaboration:</strong> We partner with hospitals and blood banks to achieve our shared goals.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Why Choose Life Link?</h2>
        <p className="text-gray-600 mb-4">
          By centralizing and streamlining the blood donation process, Life Link plays a crucial role in 
          empowering healthcare providers. Our platform enhances the reliability and responsiveness of blood
          transfusion services, ensuring that patients receive the timely care they need. Together, we can 
          build a safer, healthier community.
        </p>
      </div>
    </div>
  );
};

export default About;
