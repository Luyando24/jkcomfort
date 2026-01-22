import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50 pt-12 pb-20 lg:pt-0 lg:pb-0 lg:h-[calc(100vh-5rem)] flex items-center">
      {/* Decorative clouds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-6 xl:space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm tracking-wide uppercase mb-2 lg:mb-0">
              Coming Soon
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-text tracking-tight leading-tight">
              Soft & <span className="text-brand-blue">Protective</span> <br/>
              for <span className="text-brand-green">Babies</span> & <br/>
              <span className="text-brand-orange">Toddlers</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Designed with love for your little one's comfort. Breathable, aloe-infused, and ultra-absorbent diapers for peaceful days and restful nights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="gap-2">
                Join Waitlist <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-sm xl:max-w-md">
            {/* Image Placeholder Frame */}
            <div className="relative aspect-square rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-sky-100">
               <Image 
                 src="/hero-image.png" 
                 alt="Mother holding happy baby"
                 fill
                 className="object-cover"
                 priority
               />
               {/* Floating elements */}
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-center p-2 shadow-lg rotate-12 z-10">
                 New Arrival!
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
