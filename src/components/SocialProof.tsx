import { Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Ghulam Hussain",
      case: "DUI Defense",
      quote: "I was terrified of what would happen to my family. The team at Shahan Law didn't just handle my case brilliantly, they treated me with dignity when I felt my lowest. Case dismissed.",
    },
    {
      name: "Aliya Bibi",
      case: "Personal Injury",
      quote: "After my accident, I was overwhelmed by medical bills and insurance calls. They stepped in, took all the stress away, and got me a settlement that actually covered my needs.",
    },
    {
      name: "Neelam Mahmood",
      case: "Family Law",
      quote: "Going through a custody battle is heartbreaking. My attorney was incredibly empathetic to my situation but fiercely protective of my rights in court. I couldn't have asked for better support.",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-6">
            Stories of moving forward
          </h2>
          <p className="text-xl text-[#6B7280]">
            Real people who trusted us to help them through their toughest moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-[#E5E7EB] relative soft-shadow">
              <Quote className="w-10 h-10 text-[#E8EFEA] mb-6" fill="currentColor" />
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-[#E5E7EB] pt-6">
                <div className="w-12 h-12 bg-[#F4DCD6] rounded-full flex items-center justify-center text-[#D47A6A] font-serif font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif font-medium text-[#2C363F]">{testimonial.name}</p>
                  <p className="text-[#819E8E] text-sm font-medium">{testimonial.case}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
