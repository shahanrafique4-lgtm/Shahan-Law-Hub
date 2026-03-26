import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "Your initial consultation is 100% free and confidential. We will review your case, explain your options, and give you a clear understanding of what to expect before you pay a dime.",
    },
    {
      question: "Will I have to go to court?",
      answer: "Not necessarily. Many cases are resolved through negotiation, plea bargains, or settlements before a trial is needed. However, if going to court is the best way to protect your interests, our experienced litigators are ready to fight for you.",
    },
    {
      question: "How long will my case take?",
      answer: "Every case is unique. Some can be resolved in weeks, while complex litigation can take months or even years. During your free consultation, we will provide a realistic timeline based on the specifics of your situation.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. We believe everyone deserves top-tier legal representation. We offer flexible payment plans and accept all major credit cards. For personal injury cases, we work on a contingency fee basis—meaning you pay nothing unless we win your case.",
    }
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            You have questions. We have answers. If you don't see your question here, call us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-50 border-amber-500 shadow-md' : 'bg-white hover:border-slate-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
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
