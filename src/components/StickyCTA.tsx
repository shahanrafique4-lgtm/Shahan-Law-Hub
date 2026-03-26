import { PhoneCall } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-slate-900 border-t border-slate-800 p-3 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
        <div className="flex gap-3">
          <a 
            href="tel:+923099409120" 
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </a>
          <a 
            href="#contact" 
            className="flex-1 bg-white hover:bg-slate-50 text-slate-900 py-3.5 rounded-lg font-bold text-center transition-colors shadow-lg border border-slate-200"
          >
            Free Consult
          </a>
        </div>
      </div>
    </div>
  );
}
