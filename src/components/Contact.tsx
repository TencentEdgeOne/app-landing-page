import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white h-20 w-full flex justify-center">
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 shadow-sm"> */}
      <div className="bg-white rounded-3xl shadow-video p-6 flex flex-row w-180 justify-between">
        <div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
              <Image
                src="/images/footer-mail-icon.svg"
                alt="Email"
                width={18}
                height={18}
                className="text-white"
              />
            </div>
            <a href="mailto:info@youremail.com" className="text-secondary text-xl font-semibold lowercase hover:text-primary transition-colors">
              info@youremail.com
            </a>
          </div>
        </div>

        <div className="border-l-4 border-gray-300"></div>

        <div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
              <Image
                src="/images/footer-phone-icon.svg"
                alt="Phone"
                width={18}
                height={18}
                className="text-white"
              />
            </div>
            <a href="tel:+8803216559985" className="text-secondary text-xl font-semibold hover:text-primary transition-colors">
              +880 321 655 9985
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact; 