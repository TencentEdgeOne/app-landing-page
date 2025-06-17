import React from 'react';
import Image from 'next/image';

type StatCardProps = {
  icon: string;
  count: string;
  label: string;
};

const StatCard: React.FC<StatCardProps> = ({ icon, count, label }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="mb-3">
        <Image
          src={`/images/${icon}`}
          alt={label}
          width={30}
          height={30}
          className="text-white"
        />
      </div>
      <div className="text-2xl font-semibold text-white uppercase mb-1">{count}</div>
      <div className="text-m font-semibold text-white uppercase">{label}</div>
    </div>
  );
};

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold uppercase text-secondary mb-4">
              Download App Now
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
              Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            
            {/* App Store Icons */}
            <div className="flex flex-wrap gap-6 mb-12">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="block w-48 hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/download-apple.png"
                  alt="Download on Apple Store"
                  width={190}
                  height={56}
                />
              </a>
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="block w-48 hover:opacity-90 transition-opacity">
                <Image 
                  src="/images/download-google.png"
                  alt="Get it on Google Play"
                  width={190}
                  height={56}
                />
              </a>
            </div>
            
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard 
                icon="icon-download.svg"
                count="59865"
                label="Downloads"
              />
              <StatCard 
                icon="icon-thumb-up.svg"
                count="29852"
                label="Likes"
              />
              <StatCard 
                icon="icon-star.svg"
                count="1500"
                label="5-Star Ratings"
              />
            </div>
          </div>
          
          {/* Right Phone Image */}
          <div className="relative flex justify-center py-10">
            <div className="w-80 h-80 bg-white rounded-full shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <div className="relative z-10">
              <Image 
                src="/images/iphone-mockup-gravity.png"
                alt="iPhone Mockup"
                width={450}
                height={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download; 