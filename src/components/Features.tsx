import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/features-bg.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase text-white mb-4">App Features</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Features */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="mb-16">
              <div className="flex justify-center mb-3">
                <Image
                  src="/images/icon-chat.svg"
                  alt="Chat Feature"
                  width={50}
                  height={50}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">Free Chat</h3>
              <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="mb-16">
              <div className="flex justify-center mb-3">
                <Image
                  src="/images/icon-mobile.svg"
                  alt="Mobile Version"
                  width={50}
                  height={50}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">iOS & Android</h3>
              <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          {/* Center Phone Screenshot */}
          <div className={`md:col-span-4 h-190 flex justify-center items-center order-first md:order-none mb-12 md:mb-0 rounded-3xl shadow-xl bg-[url(/images/app-screen.png)] bg-cover`}>
            
          </div>
          
          {/* Right Features */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="mb-16">
              <div className="flex justify-center mb-3">
                <Image
                  src="/images/icon-browser.svg"
                  alt="Unlimited Features"
                  width={50}
                  height={50}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">Unlimited Features</h3>
              <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="mb-16">
              <div className="flex justify-center mb-3">
                <Image
                  src="/images/icon-design.svg"
                  alt="UI Design"
                  width={50}
                  height={50}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">Great UI Design</h3>
              <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="flex justify-center mb-3">
              <Image
                src="/images/icon-support.svg"
                alt="24/7 Support"
                width={50}
                height={50}
                className="text-white"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">24/7 Support</h3>
            <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="md:col-span-1">
            <div className="flex justify-center mb-3">
              <Image
                src="/images/icon-retina.svg"
                alt="Retina Graphics"
                width={50}
                height={50}
                className="text-white"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2 text-center">Retina Ready Graphics</h3>
            <p className="text-white/80 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 