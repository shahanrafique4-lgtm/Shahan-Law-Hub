import { Award, Star, Shield, Scale } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-3xl font-bold text-slate-900">500+</p>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">5-Star Reviews</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <Award className="w-8 h-8 text-amber-500 mb-2" />
            <p className="text-3xl font-bold text-slate-900">$50M+</p>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Recovered</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <Shield className="w-8 h-8 text-amber-500 mb-2" />
            <p className="text-3xl font-bold text-slate-900">98%</p>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Success Rate</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <Scale className="w-8 h-8 text-amber-500 mb-2" />
            <p className="text-3xl font-bold text-slate-900">25+</p>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
