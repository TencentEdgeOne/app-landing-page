import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="absolute w-full z-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-0 ">
            <div className="flex items-center mb-4 md:mb-0 md:mr-6">
              <div className="w-4 h-4 mr-2">
                <Image
                  src="/images/mail-icon.svg"
                  alt="Email"
                  width={14}
                  height={14}
                />
              </div>
              <a href="mailto:Info@youremail.com" className="text-sm text-white hover:text-primary transition-colors">
                Info@youremail.com
              </a>
            </div>

            <div className="flex items-center">
              <div className="w-4 h-4 mr-2">
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                />
              </div>
              <a href="tel:+14805550103" className="text-sm text-white hover:text-primary transition-colors">
                (480) 555-0103
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image
                src="/images/facebook-icon.svg"
                alt="Facebook"
                width={10}
                height={10}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image
                src="/images/instagram-icon.svg"
                alt="Instagram"
                width={18}
                height={18}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Image
                src="/images/twitter-icon.svg"
                alt="Twitter"
                width={20}
                height={20}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image
                src="/images/youtube-icon.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        <nav className="mt-6 bg-white py-4 rounded-md">
          <div className="flex flex-wrap justify-center md:justify-center items-center">
            <Link href="/" className="relative h-12 w-32 overflow-hidden bg-white mb-1 mr-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/"
              className="px-4 py-2 font-semibold text-primary uppercase hover:text-primary/70 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#screenshot"
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              Screenshot
            </Link>
            <Link
              href="#how-to-use"
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              How To Use
            </Link>
            <Button
              href="#download"
              variant="primary"
              className="ml-4 py-2 px-4"
            >
              Download
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
