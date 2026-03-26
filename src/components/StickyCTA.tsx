import { PhoneCall } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur-md border-t border-[#E5E7EB] p-3 shadow-[0_-10px_40px_rgba(44,54,63,0.1)]">
        <div className="flex gap-3">
          <a 
            href="tel:+923099409120" 
            className="flex-1 bg-[#819E8E] hover:bg-[#6B8576] text-white py-3.5 rounded-full font-medium text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </a>
          <a 
            href="#contact" 
            className="flex-1 bg-white hover:bg-[#F9FAFB] text-[#2C363F] py-3.5 rounded-full font-medium text-center transition-colors shadow-sm border border-[#E5E7EB]"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}
