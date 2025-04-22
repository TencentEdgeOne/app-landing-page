import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-30 pb-8 relative">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* About Section */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold uppercase mb-4">Logo</h2>
            <p className="mb-6 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-primary transition-colors"
              >
                <Image
                  src="/images/facebook-icon.svg"
                  alt="Facebook"
                  width={14}
                  height={14}
                />
              </a>
              <div className="h-4 border-l border-white/30"></div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-primary transition-colors"
              >
                <Image
                  src="/images/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <div className="h-4 border-l border-white/30"></div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-primary transition-colors"
              >
                <Image
                  src="/images/twitter-icon.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <div className="h-4 border-l border-white/30"></div>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white hover:text-primary transition-colors"
              >
                <Image
                  src="/images/youtube-icon.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:ml-8">
            <h3 className="text-2xl font-semibold uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#screenshot"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Screenshots
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-semibold uppercase mb-4">
              Newsletter
            </h3>
            <p className="mb-6 text-white/80">
              Subscribe to our newsletter for latest updates and news
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border border-white rounded py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                className="absolute right-0 top-0 bottom-0 bg-primary text-white px-4 rounded-r flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Send"
              >
                <Image
                  src="/images/send-icon.svg"
                  alt="Send"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-10">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <Image
                src="/images/copyright-icon.svg"
                alt="Copyright"
                width={18}
                height={18}
                className="mr-2 opacity-80"
              />
              <p className="text-white/80">
                Copyright 2025. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
