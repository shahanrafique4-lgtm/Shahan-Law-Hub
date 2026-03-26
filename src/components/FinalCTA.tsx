import { PhoneCall, HeartHandshake } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-[#819E8E] py-24 relative overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#819E8E] to-[#6B8576]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            You don't have to face this alone. <br className="hidden md:block" />
            Let's talk about it.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Reach out for a free, confidential conversation. We're here to listen and help you find a way forward.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+923099409120" className="w-full sm:w-auto bg-[#2C363F] hover:bg-[#1A202C] text-white px-10 py-5 rounded-full font-medium text-lg transition-all shadow-lg flex items-center justify-center gap-3 group">
              <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call (+92) 309-9409120
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-white hover:bg-[#F9FAFB] text-[#2C363F] px-10 py-5 rounded-full font-medium text-lg transition-all shadow-md flex items-center justify-center gap-2">
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-2 text-white/80 font-medium">
            <HeartHandshake className="w-5 h-5" />
            <span>100% Confidential. No Obligation.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
