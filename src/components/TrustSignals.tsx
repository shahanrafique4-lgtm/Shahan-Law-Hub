export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#E5E7EB]">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-4xl md:text-5xl font-serif text-[#819E8E] mb-2">98%</p>
            <p className="text-xs text-[#6B7280] font-medium uppercase tracking-widest">Favorable Outcomes</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-2">24/7</p>
            <p className="text-xs text-[#6B7280] font-medium uppercase tracking-widest">Always Here</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-4xl md:text-5xl font-serif text-[#819E8E] mb-2">500+</p>
            <p className="text-xs text-[#6B7280] font-medium uppercase tracking-widest">Families Helped</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-2">15+</p>
            <p className="text-xs text-[#6B7280] font-medium uppercase tracking-widest">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
