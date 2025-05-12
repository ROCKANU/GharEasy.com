"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/image/siting.png"
          alt="GharEasy.com Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
        <h1>GharEasy.com</h1>
      </div>

      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
        <li><Link href="/">Home</Link></li>  
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/mortgage-calculator">Mortgage Calculator</Link></li>
        <li><Link href="/start">Get Started</Link></li>
      </ul>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
}
