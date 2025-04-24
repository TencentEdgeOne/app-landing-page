import React from 'react';
import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-background.png"
          alt="Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Header/>
      
      <div className="container mx-auto px-4 z-10 pt-80 md:pt-32 lg:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full md:w-160 h-auto md:h-120">
            <div className="hidden md:block absolute top-0 left-20 w-160 h-100 border-[#7572FF] border-[18px]"></div>
            <div className="bg-white p-6 md:p-8 pb-8 md:pb-12 mb-6 md:ml-8 md:mt-8 z-10 md:absolute md:top-10 rounded-lg md:rounded-none shadow-lg md:shadow-none">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary uppercase leading-tight text-[#5956E9]">
                A Great App Makes<br className="hidden sm:block" />Your Life Better
              </h1>
              <p className="text-gray-800 my-4 md:mb-8 max-w-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.
              </p>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-secondary uppercase mb-4">
                  Download App Now
                </h3>
                <div className="flex flex-row flex-wrap gap-4">
                  <a href="#" className="block w-60">
                    <Image 
                      src="/images/download-apple.png"
                      alt="Download on Apple Store"
                      width={120}
                      height={56}
                      className="w-full sm:w-auto h-auto"
                    />
                  </a>
                  <a href="#" className="block w-60">
                    <Image 
                      src="/images/download-google.png"
                      alt="Get it on Google Play"
                      width={120}
                      height={56}
                      className="w-full sm:w-auto h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block absolute top-0 -right-60">
            <Image 
              src="/images/mobile-mockup.png"
              alt="Mobile App Mockup"
              width={500}
              height={600}
              className="mx-auto"
            />
          </div>
          
          {/* Mobile phone mockup - only visible on mobile */}
          <div className="relative flex justify-center md:hidden mb-8">
            <Image 
              src="/images/mobile-mockup.png"
              alt="Mobile App Mockup"
              width={300}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 