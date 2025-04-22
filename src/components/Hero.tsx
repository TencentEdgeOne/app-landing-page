import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
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
      
      <div className="container mx-auto px-4 z-10 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative  w-160 h-120">
            {/* <div className="relative mb-6"> */}
              <div className="absolute top-0 left-20 w-160 h-100 border-[#7572FF] border-[18px]"></div>
              <div className="bg-white p-8 pb-12 mb-6 ml-8 mt-8 z-10 absolute top-10">
                <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase leading-tight text-[#5956E9]">
                  A Great App Makes<br />Your Life Better
                </h1>
                <p className="text-gray-800 mb-8 max-w-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
              sunt nostrud amet.
            </p>
             <div>
              <h3 className="text-2xl font-semibold text-secondary uppercase mb-4">
                Download App Now
              </h3>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="block">
                  <Image 
                    src="/images/download-apple.png"
                    alt="Download on Apple Store"
                    width={190}
                    height={56}
                  />
                </a>
                <a href="#" className="block w-48 hover:opacity-90 transition-opacity">
                  <Image 
                    src="/images/download-google.png"
                    alt="Get it on Google Play"
                    width={190}
                    height={56}
                  />
                </a>
              </div>
            </div>
              </div>
            {/* </div> */}
          </div>
          
          <div className="relative hidden md:block absolute top-0 -right-40">
            <Image 
              src="/images/mobile-mockup.png"
              alt="Mobile App Mockup"
              width={500}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 