export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-5xl font-bold text-brand-blue mb-2 transform -rotate-2 inline-block">About Us</h2>
        <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full mb-12 opacity-50"></div>
        
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-brand-orange">
            Welcome to J & K Comfort Diapers!
          </h3>
          
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
            <p>
              Founded by <span className="font-bold text-brand-text">Jay & Kay</span>, we set out to create diapers that are 
              gentle, safe, and reliable for little ones.
            </p>
            <p>
              Our diapers are <span className="text-brand-blue font-bold">breathable</span>, <span className="text-brand-green font-bold">aloe-infused</span>, 
              and designed to keep babies and toddlers comfortable day and night.
            </p>
            <p>
              We are committed to delivering comfort, care, and quality through thoughtfully designed everyday essentials.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-yellow-100 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky-100 rounded-full blur-xl opacity-60"></div>
    </section>
  );
}
