import { ArrowRight, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF9F6]">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8EFEA] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4DCD6]/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-[#819E8E]/20 rounded-full px-5 py-2 mb-8 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-[#819E8E]" />
            <span className="text-sm font-medium text-[#2C363F]">No judgment. Just solutions.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 text-[#2C363F]">
            Legal support that actually <br className="hidden md:block" />
            <span className="text-[#819E8E] italic">supports you.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
            Facing legal trouble is overwhelming. We provide clear guidance, aggressive defense, and a human approach to get your life back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-[#819E8E] hover:bg-[#6B8576] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md flex items-center justify-center gap-2 group">
              Let's Talk About It
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+923099409120" className="w-full sm:w-auto bg-white hover:bg-[#F9FAFB] text-[#2C363F] border border-[#E5E7EB] px-8 py-4 rounded-full font-medium text-lg transition-all shadow-sm flex items-center justify-center gap-2">
              Call (+92) 309-9409120
            </a>
          </div>
          
          <p className="mt-8 text-sm text-[#6B7280] flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#819E8E] animate-pulse"></span>
            Available 24/7. 100% Confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
