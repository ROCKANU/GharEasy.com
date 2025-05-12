"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Start.module.css';

export default function Start() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    homeType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.name}! We’ll help you get started on your journey to homeownership.`);
  };

  return (
    <div className={styles.startSection}>
      <h1 className={styles.fadeIn}>Get Started with Us</h1>
      <p className={styles.fadeIn}>Let’s help you start your homeownership journey today!</p>

      {/* ✅ Optimized Image Component */}
      <div className={styles.imageWrapper}>
        <Image
          src="/app/images/home.png"
          alt="Get Started"
          width={800}
          height={400}
          className={styles.startImage}
          priority
        />
      </div>

      <div className={styles.formSection}>
        <h2>Start Your Journey</h2>
        <h6>Fill this form to start</h6>
        <form onSubmit={handleSubmit} className={styles.startForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
          <select
            name="homeType"
            value={formData.homeType}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          >
            <option value="" disabled>Select Type of Home</option>
            <option value="single-family">Single-Family Home</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}
