// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-container" style={styles.container}>
      <h1 style={styles.heading}>About Life Link</h1>
      <p style={styles.intro}>
        Life Link (LL) is a web-based platform dedicated to optimizing the management and storage of vital
        information regarding blood donations and inventory in blood banks.
      </p>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.text}>
        To enhance the efficiency of blood donation processes, ensuring that hospitals have quick access to
        safe, tested blood whenever needed.
      </p>

      <h2 style={styles.subheading}>Our Vision</h2>
      <p style={styles.text}>
        To create a world where every hospital has seamless access to blood supplies, ultimately improving
        patient care and saving lives.
      </p>

      <h2 style={styles.subheading}>Our Values</h2>
      <ul style={styles.list}>
        <li>Integrity: We maintain the highest standards of honesty and transparency.</li>
        <li>Accountability: We take responsibility for our actions and their outcomes.</li>
        <li>Innovation: We continuously strive to improve and embrace new technologies.</li>
        <li>Collaboration: We work together with hospitals and blood banks to achieve our goals.</li>
      </ul>

      <h2 style={styles.subheading}>Why Choose Life Link?</h2>
      <p style={styles.text}>
        By centralizing and streamlining the blood donation process, LL plays a crucial role in supporting
        healthcare providers, enhancing the reliability and responsiveness of blood transfusion services.
      </p>
    </div>
  );
};

// Optional inline styles for better layout
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  text: {
    lineHeight: '1.6',
  },
  list: {
    marginLeft: '20px',
    lineHeight: '1.6',
  },
  intro: {
    textAlign: 'justify',
    marginBottom: '20px',
  },
};

export default About;
