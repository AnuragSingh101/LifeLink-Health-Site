import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Main Title */}
        <h1 className="about-title">About Life Link</h1>

        {/* Introduction Paragraph */}
        <p className="about-intro">
          <span className="highlight">Life Link (LL)</span> is an innovative web-based platform dedicated to revolutionizing
          the management and storage of critical information related to blood donations and inventory in blood banks.
          Our mission is to ensure that every hospital has immediate access to safe and tested blood whenever needed,
          ultimately saving lives and improving patient care.
        </p>

        {/* Our Mission and Vision Section */}
        <div className="mission-vision-section">
          <div className="mission-vision-item">
            <div className="icon">♥</div>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              To enhance the efficiency and reliability of blood donation processes, ensuring that hospitals can quickly access
              the vital resources they need to provide lifesaving care.
            </p>
          </div>

          <div className="mission-vision-item">
            <div className="icon">🏥</div>
            <h2 className="section-title">Our Vision</h2>
            <p className="section-text">
              To create a world where every healthcare provider has seamless access to blood supplies, facilitating timely
              treatments and ultimately improving patient outcomes.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section">
          <h2 className="section-title">Our Core Values</h2>
          <ul className="values-list">
            <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our operations.</li>
            <li><strong>Accountability:</strong> We take responsibility for our actions and their impacts on the community.</li>
            <li><strong>Innovation:</strong> We embrace change and continually seek to improve our technology and processes.</li>
            <li><strong>Collaboration:</strong> We partner with hospitals and blood banks to achieve our shared goals.</li>
          </ul>
        </div>

        {/* Why Choose Life Link Section */}
        <div className="why-choose-section">
          <div className="icon">💡</div>
          <h2 className="section-title">Why Choose Life Link?</h2>
          <p className="section-text">
            By centralizing and streamlining the blood donation process, <span className="highlight">Life Link (LL)</span> plays a crucial role in
            empowering healthcare providers. Our platform enhances the reliability and responsiveness of blood transfusion
            services, ensuring that patients receive the timely care they need. Together, we can build a safer, healthier
            community.
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #ebf8ff, #f0f9ff, #f7fafc);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .about-content {
          background-color: #ffffff;
          padding: 2.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 64rem;
          width: 100%;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #0077b6;
          margin-bottom: 2rem;
        }

        .about-intro {
          color: #4a5568;
          font-size: 1.125rem;
          line-height: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        .highlight {
          font-weight: 700;
          color: #0077b6;
        }

        .mission-vision-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .mission-vision-section {
            grid-template-columns: 1fr 1fr;
          }
        }

        .mission-vision-item {
          text-align: center;
        }

        .icon {
          font-size: 3rem;
          color: #0077b6;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .section-text {
          color: #718096;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        .core-values-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .values-list {
          color: #718096;
          font-size: 1.125rem;
          line-height: 1.75rem;
          list-style-type: none;
          padding: 0;
          margin: 0 auto;
          max-width: 48rem;
        }

        .values-list li {
          margin-bottom: 1rem;
        }

        .why-choose-section {
          text-align: center;
        }

        .why-choose-section .icon {
          font-size: 3rem;
          color: #0077b6;
          margin-bottom: 1rem;
          font-weight: 700;
        }
      `}</style>
      
    </div>
  );
};

export default About;
