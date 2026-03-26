import { CheckCircle2, Shield, Scale, Users } from 'lucide-react';

export default function Solution() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            We Take the Burden Off Your Shoulders
          </h2>
          <p className="text-xl text-slate-300">
            At Shahan Law Hub, we don't just take cases—we fight for your life, your family, and your future. 
            When you hire us, you get a relentless team of legal experts standing between you and the system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Aggressive Defense</h3>
            <p className="text-slate-400">
              We don't back down. We challenge every piece of evidence, every witness, and every procedure to protect your rights.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
            <p className="text-slate-400">
              Our track record speaks for itself. We've secured dismissals, acquittals, and multi-million dollar settlements for our clients.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">24/7 Availability</h3>
            <p className="text-slate-400">
              Legal emergencies don't happen on a schedule. When you need us, we are there. You will never feel ignored or in the dark.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-amber-500/20">
            Stop Worrying. Start Fighting.
            <CheckCircle2 className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
