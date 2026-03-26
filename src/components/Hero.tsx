import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-slate-900 to-slate-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-300">Voted #1 Legal Defense Team in the State</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Facing Serious Charges? <br className="hidden md:block" />
            <span className="text-amber-500">We Protect Your Freedom & Future.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let a single mistake ruin your life. Get aggressive, proven legal representation before it's too late.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group">
              Get Free Case Evaluation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+923099409120" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Call (+92) 309-9409120
            </a>
          </div>
          
          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Lawyers available 24/7. 100% Confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
