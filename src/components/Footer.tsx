import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sky-300">J&K</span> <span className="text-green-400">Comfort</span>
            </h3>
            <p className="text-blue-200 max-w-xs">
              Soft, safe, and reliable diapers for your little ones. Made with love by Jay & Kay.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#features" className="text-blue-200 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} J & K Comfort Diapers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
