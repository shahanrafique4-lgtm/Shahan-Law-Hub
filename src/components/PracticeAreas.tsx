import { ArrowRight, Car, Gavel, HeartPulse, Home } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    {
      title: "Criminal Defense",
      description: "DUI, drug charges, assault, and white-collar crimes. We fight to keep your record clean and your freedom intact.",
      icon: Gavel,
    },
    {
      title: "Personal Injury",
      description: "Car accidents, slip and falls, and catastrophic injuries. We make them pay for what they did to you.",
      icon: Car,
    },
    {
      title: "Family Law",
      description: "Divorce, child custody, and support. We protect your assets and your relationship with your children.",
      icon: Home,
    },
    {
      title: "Medical Malpractice",
      description: "Surgical errors, misdiagnosis, and birth injuries. We hold negligent medical professionals accountable.",
      icon: HeartPulse,
    }
  ];

  return (
    <section id="practice-areas" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            How We Can Help You
          </h2>
          <p className="text-xl text-slate-600">
            We focus on high-stakes cases where your life, liberty, or livelihood is on the line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="group border border-slate-200 hover:border-amber-500 rounded-xl p-8 transition-all hover:shadow-lg bg-slate-50 hover:bg-white">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <area.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{area.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
                    Get Help Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
