import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center sm:items-start group">
              <h1 className="text-3xl font-extrabold tracking-tight leading-none">
                <span className="text-brand-blue drop-shadow-sm">J&K</span>
                <span className="text-brand-green ml-1 drop-shadow-sm">Comfort</span>
              </h1>
              <span className="text-brand-blue text-sm font-bold tracking-widest uppercase -mt-1 group-hover:scale-105 transition-transform">Diapers</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-brand-text font-semibold hover:text-brand-blue transition-colors">
              About Us
            </Link>
            <Link href="#features" className="text-brand-text font-semibold hover:text-brand-blue transition-colors">
              Features
            </Link>
            <Link href="#products" className="text-brand-text font-semibold hover:text-brand-blue transition-colors">
              Products
            </Link>
            <Button variant="orange" size="sm">
              Shop Now
            </Button>
          </div>

          <div className="md:hidden">
            <button className="text-brand-text p-2">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
