import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center">
            <span className="text-amber-500 font-serif font-bold text-xl">S</span>
          </div>
          <span className="font-serif font-bold text-2xl text-slate-900 tracking-tight">
            Shahan Law Hub
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#practice-areas" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Practice Areas</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How It Works</a>
          <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+923099409120" className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors">
            <Phone className="w-5 h-5 text-amber-500" />
            <span>(+92) 309-9409120</span>
          </a>
          <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-md">
            Free Case Evaluation
          </a>
        </div>
      </div>
    </header>
  );
}
