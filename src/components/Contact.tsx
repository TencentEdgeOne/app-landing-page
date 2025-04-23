import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white h-auto md:h-20 w-full flex justify-center px-4">
      {/* Contact card positioned at the center */}
      <div className="bg-white rounded-3xl shadow-video p-4 md:p-6 flex flex-col md:flex-row w-full md:w-180 justify-between max-w-lg md:max-w-none">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
              <Image
                src="/images/footer-mail-icon.svg"
                alt="Email"
                width={18}
                height={18}
                className="text-white"
              />
            </div>
            <a href="mailto:info@youremail.com" className="text-secondary text-lg md:text-xl font-semibold lowercase hover:text-primary transition-colors">
              info@youremail.com
            </a>
          </div>
        </div>

        <div className="hidden md:block border-l-4 border-gray-300"></div>
        <div className="border-t-4 md:hidden border-gray-300 my-4"></div>

        <div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
              <Image
                src="/images/footer-phone-icon.svg"
                alt="Phone"
                width={18}
                height={18}
                className="text-white"
              />
            </div>
            <a href="tel:+8803216559985" className="text-secondary text-lg md:text-xl font-semibold hover:text-primary transition-colors">
              +880 321 655 9985
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 