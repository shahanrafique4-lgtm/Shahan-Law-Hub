import { Menu, X, Scale } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b-2 border-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#CCFF00] flex items-center justify-center brutal-border group-hover:bg-white transition-colors">
            <Scale className="w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl tracking-wider text-white uppercase">
            Shahan Law
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#practice-areas" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#CCFF00] transition-colors">Practice Areas</a>
          <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#CCFF00] transition-colors">How It Works</a>
          <a href="#reviews" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#CCFF00] transition-colors">Reviews</a>
          <a href="#faq" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#CCFF00] transition-colors">FAQ</a>
          <a 
            href="#contact" 
            className="bg-[#CCFF00] text-black px-6 py-3 font-display uppercase tracking-widest text-lg brutal-border hover:bg-white transition-colors"
          >
            Get Help Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b-2 border-white absolute top-20 left-0 w-full">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#practice-areas" className="text-lg font-bold uppercase tracking-widest text-white p-4 border-b border-white/20" onClick={() => setIsMenuOpen(false)}>Practice Areas</a>
            <a href="#how-it-works" className="text-lg font-bold uppercase tracking-widest text-white p-4 border-b border-white/20" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#reviews" className="text-lg font-bold uppercase tracking-widest text-white p-4 border-b border-white/20" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#faq" className="text-lg font-bold uppercase tracking-widest text-white p-4 border-b border-white/20" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a 
              href="#contact" 
              className="bg-[#CCFF00] text-black px-6 py-4 font-display uppercase tracking-widest text-xl text-center brutal-border mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Help Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
