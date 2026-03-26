import { PhoneCall, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-amber-500 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-amber-500 to-amber-600"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            Don't Face the Legal System Alone. <br className="hidden md:block" />
            Talk to a Lawyer Today.
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-900/80 mb-12 max-w-2xl mx-auto font-medium">
            The longer you wait, the harder it is to win. Secure your free, confidential case evaluation right now.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+923099409120" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-md font-bold text-xl transition-all shadow-2xl flex items-center justify-center gap-3 group">
              <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Call (+92) 309-9409120
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-2">
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-2 text-slate-900 font-medium">
            <ShieldCheck className="w-5 h-5" />
            <span>100% Confidential. No Obligation.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
