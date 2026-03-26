import React, { useState } from 'react';
import { Lock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Trust Building */}
          <div className="md:w-5/12 bg-slate-900 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Get Your Free Case Evaluation
            </h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Fill out the form to schedule a confidential consultation with an experienced attorney. We will review your case and explain your options.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">100% Confidential</h4>
                  <p className="text-slate-400 text-sm">Your information is protected by attorney-client privilege.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">No Obligation</h4>
                  <p className="text-slate-400 text-sm">You are not required to hire us after your free consultation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-7/12 p-10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Request Received</h3>
                <p className="text-lg text-slate-600 max-w-sm">
                  Thank you. An attorney will contact you shortly to discuss your case.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-amber-600 font-bold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="caseType" className="block text-sm font-bold text-slate-700 mb-2">Case Type *</label>
                  <div className="relative">
                    <select 
                      id="caseType" 
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="" disabled>Select Case Type...</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="injury">Personal Injury</option>
                      <option value="family">Family Law</option>
                      <option value="medical">Medical Malpractice</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Request...</span>
                  ) : (
                    <>
                      Request Free Consultation
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our privacy policy. Information shared is confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
