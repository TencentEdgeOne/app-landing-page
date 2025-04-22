import React, { useState } from 'react';
import Image from 'next/image';

// Screenshot data
const screenshots = [
  {
    id: 1,
    src: '/images/screenshot-1.png',
    alt: 'App Screenshot 1'
  },
  {
    id: 2,
    src: '/images/screenshot-2.png',
    alt: 'App Screenshot 2'
  },
  {
    id: 3,
    src: '/images/screenshot-3.png',
    alt: 'App Screenshot 3'
  },
  {
    id: 4,
    src: '/images/screenshot-4.png',
    alt: 'App Screenshot 4'
  }
];

const Screenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="screenshot" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase text-secondary mb-4 text-center">
            Checkout Our App Interface Look
          </h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          
          <div className="relative mt-16 mb-16">
            {/* Phone Model */}
            <div className="relative mx-auto w-[300px] h-[600px] z-10">
              <Image
                src="/images/iphone-mockup.png"
                alt="iPhone Model"
                fill
                className="pointer-events-none"
              />
              
              {/* Screenshot Carousel */}
              <div className="absolute top-[40px] left-[22px] w-[256px] h-[520px] overflow-hidden rounded-2xl">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === activeIndex ? 'opacity-100 z-10' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Control - Previous */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 md:-left-10 -translate-y-1/2 w-20 h-20 rounded-full border border-primary flex items-center justify-center hover:outline-none cursor-pointer hover:text-white hover:bg-primary text-primary transition-colors "
              aria-label="previous screenshot"
            >
              
              <svg width="16" height="54" viewBox="0 0 33 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9981 27.0001L32.9991 48.0011L27.0001 54.0001L0 27.0001L27.0001 0L32.9991 5.99907L11.9981 27.0001Z" fill="currentColor"/>
              </svg>
            </button>
            
            {/* Navigation Control - Next */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 md:-right-10 -translate-y-1/2 w-20 h-20 rounded-full border border-primary flex items-center justify-center hover:outline-none cursor-pointer hover:bg-primary hover:text-white text-primary transition-colors "
              aria-label="next screenshot"
            >
              <svg width="16" height="54" viewBox="0 0 33 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.001 26.9999L4.19639e-06 5.99893L5.99907 -0.000134425L32.9991 26.9999L5.99907 54L5.24456e-07 48.0009L21.001 26.9999Z" fill="currentColor"/>
</svg>
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                  index === activeIndex
                    ? 'border border-primary'
                    : 'bg-primary'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots; 