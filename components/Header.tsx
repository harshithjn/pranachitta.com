'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Offline', href: '/offline' },
    { name: 'Online', href: '/online' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-0">
  <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1750674115/Transparent-01_hpxbqo.png" alt="Icon" className="h-20 w-20" />
</div>


            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors leading-tight">
                Prana Chitta
              </span>
              <span className="text-xs text-gray-600 italic leading-tight">
                Ashram
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
         <div className="hidden md:block">
  <Link href="/contact">
    <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
      Contact Us
    </Button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
           <div className="hidden md:block">
  <Link href="/contact">
    <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
      Contact Us
    </Button>
  </Link>
</div>
          </nav>
        </div>
      </div>
    </header>
  );
}