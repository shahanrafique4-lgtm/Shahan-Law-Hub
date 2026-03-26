import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Problem from './components/Problem';
import Solution from './components/Solution';
import PracticeAreas from './components/PracticeAreas';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <TrustSignals />
        <Problem />
        <Solution />
        <PracticeAreas />
        <HowItWorks />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
