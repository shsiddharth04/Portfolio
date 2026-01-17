import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact navbar styles
      setScrolled(window.scrollY > 20);

      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-sm font-semibold tracking-tight text-textPrimary hover:text-accent transition-colors relative z-10">
            Siddharth Sharma
          </a>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent">
          <div 
            className="h-full bg-accent transition-all duration-150 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;