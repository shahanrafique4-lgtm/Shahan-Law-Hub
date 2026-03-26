import { Shield, Scale, HeartHandshake } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-24 bg-white border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C363F]">
            Your dedicated support team.
          </h2>
          <p className="text-xl text-[#6B7280]">
            We combine aggressive legal strategy with genuine human empathy. We fight the system, but we support you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#FAF9F6] p-10 rounded-3xl border border-[#E5E7EB] hover:border-[#819E8E]/50 transition-colors group">
            <div className="w-14 h-14 bg-[#E8EFEA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#819E8E] transition-colors">
              <Shield className="w-7 h-7 text-[#819E8E] group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-[#2C363F]">Fierce Advocacy</h3>
            <p className="text-[#6B7280] leading-relaxed">
              We challenge every piece of evidence and every procedure. We don't back down when your future is on the line.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-10 rounded-3xl border border-[#E5E7EB] hover:border-[#819E8E]/50 transition-colors group">
            <div className="w-14 h-14 bg-[#E8EFEA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#819E8E] transition-colors">
              <Scale className="w-7 h-7 text-[#819E8E] group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-[#2C363F]">Clear Strategy</h3>
            <p className="text-[#6B7280] leading-relaxed">
              No confusing legal jargon. We explain exactly what's happening, what your options are, and how we plan to win.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-10 rounded-3xl border border-[#E5E7EB] hover:border-[#819E8E]/50 transition-colors group">
            <div className="w-14 h-14 bg-[#E8EFEA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#819E8E] transition-colors">
              <HeartHandshake className="w-7 h-7 text-[#819E8E] group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-[#2C363F]">Human Connection</h3>
            <p className="text-[#6B7280] leading-relaxed">
              You are a person, not a case file. We are available 24/7 to answer your questions and calm your nerves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
