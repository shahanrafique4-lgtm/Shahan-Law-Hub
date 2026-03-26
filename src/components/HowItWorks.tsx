import { Phone, CalendarCheck, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Your Path to Peace of Mind
          </h2>
          <p className="text-xl text-slate-600">
            We've streamlined our process to get you the help you need, fast. No confusing legal jargon, just clear steps forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

          <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center z-10">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Contact Us</h3>
            <p className="text-slate-600">
              Call us 24/7 or fill out our secure online form. We respond immediately because your time is critical.
            </p>
          </div>

          <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center z-10">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
              <CalendarCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Free Consultation</h3>
            <p className="text-slate-600">
              We review your case, explain your options in plain English, and build a strategy to win.
            </p>
          </div>

          <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center z-10">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Resolution</h3>
            <p className="text-slate-600">
              We fight aggressively on your behalf, keeping you updated every step of the way until your case is resolved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
