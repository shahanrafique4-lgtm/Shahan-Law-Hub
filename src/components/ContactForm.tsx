import React, { useState } from 'react';
import { Lock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#FAF9F6] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl soft-shadow border border-[#E5E7EB] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Soft Trust Building */}
          <div className="md:w-5/12 bg-[#E8EFEA] text-[#2C363F] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/40 blur-[80px] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight relative z-10">
              Let's figure this out together.
            </h2>
            <p className="text-[#6B7280] mb-8 text-lg leading-relaxed relative z-10">
              Fill out the form to schedule a confidential chat. We'll listen to your story and explain your options clearly.
            </p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Lock className="w-5 h-5 text-[#819E8E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Completely Private</h4>
                  <p className="text-[#6B7280] text-sm">Your information is safe and protected by attorney-client privilege.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#819E8E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">No Pressure</h4>
                  <p className="text-[#6B7280] text-sm">You are never required to hire us after your free consultation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-7/12 p-12">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-[#E8EFEA] text-[#819E8E] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-serif text-[#2C363F]">Request Received</h3>
                <p className="text-lg text-[#6B7280] max-w-sm">
                  Thank you for reaching out. We will contact you shortly to talk.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[#819E8E] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4B5563] mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#819E8E]/20 focus:border-[#819E8E] outline-none transition-all bg-[#FAF9F6] focus:bg-white text-[#2C363F]"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#4B5563] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#819E8E]/20 focus:border-[#819E8E] outline-none transition-all bg-[#FAF9F6] focus:bg-white text-[#2C363F]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-[#4B5563] mb-2">What do you need help with?</label>
                  <div className="relative">
                    <select 
                      id="caseType" 
                      required
                      defaultValue=""
                      className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#819E8E]/20 focus:border-[#819E8E] outline-none transition-all bg-[#FAF9F6] focus:bg-white appearance-none text-[#2C363F]"
                    >
                      <option value="" disabled className="text-gray-400">Select an option...</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="injury">Personal Injury</option>
                      <option value="family">Family Law</option>
                      <option value="medical">Medical Malpractice</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#9CA3AF]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#819E8E] hover:bg-[#6B8576] text-white font-medium py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 text-lg mt-4"
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
                
                <p className="text-xs text-center text-[#9CA3AF] mt-4">
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
