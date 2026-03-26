import { ArrowRight, Car, Scale, Shield, Users } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    {
      title: "Criminal Defense",
      description: "Protecting your freedom and your record from serious charges.",
      icon: Shield,
      color: "bg-[#E8EFEA] text-[#819E8E]"
    },
    {
      title: "Personal Injury",
      description: "Helping you recover and rebuild after an accident.",
      icon: Car,
      color: "bg-[#F4DCD6] text-[#D47A6A]"
    },
    {
      title: "Family Law",
      description: "Navigating divorce and custody with compassion.",
      icon: Users,
      color: "bg-[#E2E8F0] text-[#64748B]"
    },
    {
      title: "Civil Rights",
      description: "Holding the system accountable when they cross the line.",
      icon: Scale,
      color: "bg-[#FEF3C7] text-[#D97706]"
    }
  ];

  return (
    <section id="practice-areas" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-6">
            How we can help you
          </h2>
          <p className="text-xl text-[#6B7280]">
            We focus on areas where people are most vulnerable and need the strongest support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="group bg-white border border-[#E5E7EB] hover:border-[#819E8E]/50 rounded-3xl p-8 transition-all hover:shadow-md cursor-pointer">
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${area.color}`}>
                  <area.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2C363F] mb-3">{area.title}</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#819E8E] font-medium hover:text-[#6B8576] transition-colors">
                    Learn more
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
