import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  console.log("Home page rendering...");
  // Landing page for J & K Comfort
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <section className="py-24 bg-sky-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-text mb-6">Ready to try J & K Comfort?</h2>
          <p className="text-xl text-slate-600 mb-8">Join our family and experience the difference.</p>
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Join the Waitlist</h3>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
              <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-200">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
