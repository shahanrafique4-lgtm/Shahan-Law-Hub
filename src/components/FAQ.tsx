import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "Your initial consultation is completely free. We'll listen to your situation, review your options, and give you a clear understanding of the costs involved before you commit to anything.",
    },
    {
      question: "Will I have to go to court?",
      answer: "Not always. Many cases are resolved through negotiation or settlements. If going to court is the best way to protect you, we'll handle the process and guide you every step of the way.",
    },
    {
      question: "How long will my case take?",
      answer: "Every situation is different. Some resolve in weeks, while others take months. During your free consultation, we'll give you a realistic timeline based on your specific circumstances.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. We believe everyone deserves quality legal support. We offer flexible payment plans, and for personal injury cases, we work on a contingency fee basis—meaning you pay nothing unless we win.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C363F] mb-6">
            Common questions
          </h2>
          <p className="text-xl text-[#6B7280]">
            We believe in transparency. If you don't see your question here, just ask us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#FAF9F6] border-[#819E8E] shadow-sm' : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-[#2C363F] pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#819E8E] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#9CA3AF] flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
