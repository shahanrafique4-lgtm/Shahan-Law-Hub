import { Coffee } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F4DCD6] text-[#D47A6A] mb-8">
            <Coffee className="w-8 h-8" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C363F]">
            Take a deep breath. <br/>We can figure this out.
          </h2>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-12 leading-relaxed">
            The legal system is intimidating, confusing, and stressful. You might be losing sleep over what happens next, worrying about your family, your job, or your reputation. You don't have to carry this weight alone.
          </p>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl soft-shadow text-left border border-[#E5E7EB]">
            <h3 className="text-2xl font-serif text-[#2C363F] mb-6">We understand the anxiety of:</h3>
            <ul className="space-y-5">
              {[
                "Not knowing what to say to authorities or insurance companies.",
                "Fearing the long-term impact on your permanent record.",
                "Worrying about hidden fees and unpredictable legal costs.",
                "Feeling like just another case file in a broken system."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#E8EFEA] text-[#819E8E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium">✓</span>
                  </div>
                  <span className="text-[#4B5563] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
