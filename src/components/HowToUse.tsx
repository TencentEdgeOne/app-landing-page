import React, { useState } from 'react';
import Image from 'next/image';

const HowToUse: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real application, video playback would be started here
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/features-bg.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-white mb-4">
            how to use the app perfectly
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Video Thumbnail */}
          <div 
            className="aspect-video rounded-lg overflow-hidden shadow-2xl relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute inset-0 bg-primary/40 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
            
            <Image 
              src="/images/video-thumbnail.png"
              alt="Video Thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              className={`transition-all duration-500 ${isPlaying ? 'opacity-0 scale-105' : 'scale-100'} ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
            
            {isPlaying ? (
              // Here an actual video player would be embedded
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="App Tutorial" 
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            
            {/* Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlayVideo}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                aria-label="Play Video"
              >
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="w-24 h-24 rounded-full bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
                  
                  {/* Middle Ring */}
                  <div className="w-20 h-20 rounded-full bg-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                  
                  {/* Inner Circle */}
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/icon-video.svg"
                      alt="Play"
                      width={32}
                      height={32}
                      className="text-primary ml-1"
                    />
                  </div>
                </div>
              </button>
            )}
          </div>
          
          {/* Video Label */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-lg">
            <span className="text-primary font-semibold">Tutorial Video</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse; 