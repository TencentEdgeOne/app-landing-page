import React, { useEffect } from "react";
import Image from "next/image";


const Header = () => {
  // Component did mount effect to ensure we're running client-side
  useEffect(() => {
    // Add active class to navigation links based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-primary');
            
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('text-primary');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="absolute w-full z-100 top-0">
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

          <div className="flex space-x-4 justify-center items-center">
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
            <a href="#home" className="relative h-12 w-32 overflow-hidden bg-white mb-1 mr-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </a>
            <a
              href="#home"
              className="px-4 py-2 font-semibold text-primary uppercase hover:text-primary/70 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              // onClick={handleLinkClick}
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#features"
              // onClick={handleLinkClick}
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#screenshot"
              // onClick={handleLinkClick}
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              Screenshot
            </a>
            <a
              href="#how-to-use"
              // onClick={handleLinkClick}
              className="px-4 py-2 font-semibold text-secondary uppercase hover:text-primary transition-colors"
            >
              How To Use
            </a>
            <a
              href="#download"
              // onClick={handleLinkClick}
              className="ml-4 py-2 px-6 bg-primary text-white font-semibold uppercase rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Download
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
