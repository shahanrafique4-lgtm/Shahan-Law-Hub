import { AlertTriangle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-8">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Are You Feeling Overwhelmed, Scared, and Unsure of What to Do Next?
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            When you're facing a serious legal issue, the weight of the world is on your shoulders. 
            The legal system is confusing, unforgiving, and designed to work against you if you don't know the rules.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">You might be worried about:</h3>
            <ul className="space-y-4">
              {[
                "Losing your freedom, your job, or your reputation.",
                "Saying the wrong thing to investigators or insurance adjusters.",
                "Drowning in medical bills or legal fees you can't afford.",
                "The impact this will have on your family's future."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">✕</span>
                  </div>
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
