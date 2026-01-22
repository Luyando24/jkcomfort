import { Feather, Leaf, Shield, Droplet } from 'lucide-react';

const features = [
  {
    name: 'Soft & Breathable',
    icon: Feather,
    color: 'bg-sky-100 text-sky-500',
    description: 'Cloud-like softness that lets skin breathe.'
  },
  {
    name: 'Aloe Infused Lining',
    icon: Leaf,
    color: 'bg-green-100 text-green-500',
    description: 'Natural soothing care for sensitive skin.'
  },
  {
    name: 'Leak Guard Protection',
    icon: Shield,
    color: 'bg-blue-100 text-blue-600',
    description: 'Advanced protection against leaks day & night.'
  },
  {
    name: 'Wetness Indicator',
    icon: Droplet,
    color: 'bg-yellow-100 text-yellow-500',
    description: 'Color-changing strip tells you when to change.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text mb-4">Why Parents Love Us</h2>
          <p className="text-xl text-slate-500">Premium features for your baby's ultimate comfort</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-xl shadow-blue-100/50 hover:-translate-y-2 transition-transform duration-300 border border-blue-50">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-10 h-10" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">{feature.name}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
