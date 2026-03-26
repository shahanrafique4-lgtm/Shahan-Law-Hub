import { Phone, CalendarHeart, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-6">
            A simple path forward
          </h2>
          <p className="text-xl text-[#6B7280]">
            No complicated processes. Just three steps to get the support you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-[#E5E7EB] -z-10"></div>

          <div className="relative text-center z-10">
            <div className="w-24 h-24 bg-[#FAF9F6] border-4 border-white text-[#819E8E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Phone className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#2C363F] mb-4">1. Reach Out</h3>
            <p className="text-[#6B7280] leading-relaxed px-4">
              Call or message us. We respond quickly because we know waiting is the hardest part.
            </p>
          </div>

          <div className="relative text-center z-10">
            <div className="w-24 h-24 bg-[#FAF9F6] border-4 border-white text-[#819E8E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CalendarHeart className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#2C363F] mb-4">2. Let's Talk</h3>
            <p className="text-[#6B7280] leading-relaxed px-4">
              A free, confidential conversation to understand your situation and lay out your options.
            </p>
          </div>

          <div className="relative text-center z-10">
            <div className="w-24 h-24 bg-[#FAF9F6] border-4 border-white text-[#819E8E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-[#2C363F] mb-4">3. We Handle It</h3>
            <p className="text-[#6B7280] leading-relaxed px-4">
              You go back to your life. We take over the legal burden and fight for your best outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
