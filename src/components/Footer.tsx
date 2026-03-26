import { MapPin, Phone, Mail, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C363F] text-[#9CA3AF] py-16 border-t border-[#1A202C] pb-24 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center text-[#819E8E]">
                <Leaf className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="font-serif font-medium text-2xl text-white tracking-tight">
                Shahan Law
              </span>
            </div>
            <p className="mb-8 max-w-md leading-relaxed">
              Legal support that actually supports you. We provide clear guidance, aggressive defense, and a human approach to get your life back on track.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#819E8E] hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#819E8E] hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center hover:bg-[#819E8E] hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-medium mb-6 text-lg">How We Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#819E8E] transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-[#819E8E] transition-colors">DUI & Traffic</a></li>
              <li><a href="#" className="hover:text-[#819E8E] transition-colors">Personal Injury</a></li>
              <li><a href="#" className="hover:text-[#819E8E] transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-[#819E8E] transition-colors">Medical Malpractice</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-medium mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#819E8E] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>123 Legal Avenue, Suite 400<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#819E8E] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+923099409120" className="hover:text-[#819E8E] transition-colors">(+92) 309-9409120</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#819E8E] flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:hello@shahanlaw.com" className="hover:text-[#819E8E] transition-colors">hello@shahanlaw.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[#374151] text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Shahan Law. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-[#6B7280] max-w-4xl text-center mx-auto leading-relaxed">
          Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </div>
      </div>
    </footer>
  );
}
