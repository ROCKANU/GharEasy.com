"use client";

import Navbar from './components/Navbar';
import './styles/globals.css';
import Image from 'next/image'; // Importing the Image component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GharEasy.com</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main className="content">
          {children}
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 GharEasy.com | All Rights Reserved</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?=100008540594058" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/image/FACEBOOK.png" 
                  alt="Facebook" 
                  width={24} // Set appropriate width
                  height={24} // Set appropriate height
                />
              </a>

              <a href="https://www.instagram.com/anushritiwari40/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/image/Instagram_icon.png"
                  alt="Instagram" 
                  width={24} // Set appropriate width
                  height={24} // Set appropriate height
                />
              </a>
              <a href="https://www.linkedin.com/in/anushritiwari/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/image/linkdin.png"
                  alt="LinkedIn" 
                  width={24} // Set appropriate width
                  height={24} // Set appropriate height
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

