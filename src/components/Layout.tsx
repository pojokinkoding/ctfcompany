import { Outlet, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-5 lg:py-6">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex justify-start items-center gap-2 text-brand-green select-none">
            <span className="font-sans font-[900] text-[5.5rem] leading-none tracking-tight">C</span>
            <div className="w-[1.1rem] h-[1.6rem] relative flex-shrink-0 mt-2">
              <svg viewBox="0 0 24 36" className="w-full h-full fill-current">
                <path d="M12,2 C5.37,2 0,9.16 0,18 C0,26.84 5.37,34 12,34 C18.63,34 24,26.84 24,18 C24,9.16 18.63,2 12,2 Z" />
                <path d="M11,3 C10,12 16,24 11,33" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-sans font-[900] text-[5.5rem] leading-none tracking-tight">T</span>
            <div className="w-[1.1rem] h-[1.6rem] relative flex-shrink-0 mt-2">
               <svg viewBox="0 0 24 36" className="w-full h-full fill-current">
                 <path d="M12,2 C5.37,2 0,9.16 0,18 C0,26.84 5.37,34 12,34 C18.63,34 24,26.84 24,18 C24,9.16 18.63,2 12,2 Z" />
                 <path d="M11,3 C10,12 16,24 11,33" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
               </svg>
            </div>
            <span className="font-sans font-[900] text-[5.5rem] leading-none tracking-tight">F</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-16 text-[18px] font-semibold text-brand-green tracking-wide">
            <Link to="/" className="hover:opacity-75 transition-opacity">Home</Link>
            <Link to="/about" className="hover:opacity-75 transition-opacity">About Us</Link>
            <Link to="/product" className="hover:opacity-75 transition-opacity">Our Product</Link>
            <a href="https://api.whatsapp.com/send/?phone=6287785737638&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-brand-green p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-gray-100 flex flex-col items-center py-6 gap-6 text-[18px] font-semibold text-brand-green tracking-wide">
            <Link to="/" className="hover:opacity-75 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:opacity-75 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/product" className="hover:opacity-75 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Our Product</Link>
            <a href="https://api.whatsapp.com/send/?phone=6287785737638&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 xl:gap-x-12 mb-8 items-stretch">
            
            {/* Column 1: Huge Logo */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start">
              <h2 className="font-display font-normal text-white leading-[0.8] tracking-tight flex flex-col uppercase m-0 text-[5rem] min-[400px]:text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11.5rem]">
                <span>COFFEE</span>
                <span className="flex items-center gap-3 md:gap-4 xl:gap-6">
                  TRADE
                  {/* Circular Stamp */}
                  <div className="w-[4rem] h-[4rem] min-[400px]:w-[5rem] min-[400px]:h-[5rem] sm:w-[6.5rem] sm:h-[6.5rem] md:w-[8rem] md:h-[8rem] lg:w-[6.5rem] lg:h-[6.5rem] xl:w-[8.5rem] xl:h-[8.5rem] 2xl:w-[10rem] 2xl:h-[10rem] relative flex-shrink-0 transform -translate-y-1 md:-translate-y-2 ml-1 md:ml-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-[0deg]">
                      <path id="footerStampPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                      <text className="fill-white text-[8px] font-sans font-bold tracking-[0.16em] uppercase">
                        <textPath href="#footerStampPath">
                          COFFEE TRADE FACTORY ● COFFEE TRADE FACTORY ● 
                        </textPath>
                      </text>
                      <g transform="translate(50, 50)">
                        <text x="-21" y="10" textAnchor="middle" className="fill-white text-[28px] font-display font-normal">C</text>
                        <g transform="translate(-11, -5) scale(0.25)">
                          <path d="M12,2 C5.37,2 0,9.16 0,18 C0,26.84 5.37,34 12,34 C18.63,34 24,26.84 24,18 C24,9.16 18.63,2 12,2 Z" fill="currentColor" className="text-white"/>
                          <path d="M11,3 C10,12 16,24 11,33" fill="none" stroke="#2A4A35" strokeWidth="3.5" strokeLinecap="round" />
                        </g>
                        <text x="0" y="10" textAnchor="middle" className="fill-white text-[28px] font-display font-normal">T</text>
                        <g transform="translate(5.5, -5) scale(0.25)">
                          <path d="M12,2 C5.37,2 0,9.16 0,18 C0,26.84 5.37,34 12,34 C18.63,34 24,26.84 24,18 C24,9.16 18.63,2 12,2 Z" fill="currentColor" className="text-white"/>
                          <path d="M11,3 C10,12 16,24 11,33" fill="none" stroke="#2A4A35" strokeWidth="3.5" strokeLinecap="round" />
                        </g>
                        <text x="21" y="10" textAnchor="middle" className="fill-white text-[28px] font-display font-normal">F</text>
                      </g>
                    </svg>
                  </div>
                </span>
                <span>FACTORY</span>
              </h2>
            </div>

            {/* Column 2: Info & Copyright */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full">
              <div className="lg:mt-2 xl:mt-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2rem] xl:text-[2.75rem] 2xl:text-[3.25rem] font-display font-normal text-white leading-[1.05] mb-6 md:mb-10 uppercase tracking-wide">
                  BRIDGING THE GAP BETWEEN <br className="hidden lg:block"/> INDONESIAN HERITAGE & <br className="hidden lg:block"/> THE GLOBAL COFFEE WORLD
                </h3>
                
                <div className="mb-12 lg:mb-16">
                  <h4 className="font-sans font-bold text-base md:text-lg xl:text-xl text-white uppercase mb-2 md:mb-4 tracking-widest">CTF WAREHOUSE</h4>
                  <div className="text-sm md:text-base xl:text-lg text-white/90 leading-[1.6] font-sans font-normal space-y-1">
                    <p>Blessindo Industrial Estate, Blok F no 67</p>
                    <p>Jl. Raya H. Tabri, Bojongkamal, Kec. Legok, Kabupaten Tangerang,</p>
                    <p>Banten 15820, Indonesia.</p>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-auto pt-8">
                <p className="font-sans text-sm md:text-base xl:text-lg text-white flex items-center h-[28px]">
                  © 2026 Coffee Trade Factory. All rights reserved.
                </p>
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="lg:col-span-2 xl:col-span-2 flex flex-col justify-end items-start lg:items-end h-full mt-4 lg:mt-0">
              <div className="flex items-center gap-2 group text-white h-[28px]">
                <Instagram className="w-5 h-5 xl:w-[22px] xl:h-[22px]" />
                <a href="https://instagram.com/coffee.trade.factory" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium font-sans text-sm md:text-base xl:text-lg whitespace-nowrap">
                  @coffee.trade.factory
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="w-full h-[2px] bg-white mt-8 xl:mt-12 opacity-100"></div>

        </div>
      </footer>
    </div>
  );
}
