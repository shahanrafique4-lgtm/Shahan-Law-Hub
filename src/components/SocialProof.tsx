import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Ghulam Hussain",
      case: "DUI Defense",
      quote: "I thought my life was over after my arrest. Shahan Law Hub got my charges completely dismissed. They saved my job and my family.",
    },
    {
      name: "Aliya Bibi",
      case: "Personal Injury",
      quote: "The insurance company offered me pennies. Shahan Law fought them in court and secured a $1.2M settlement. They are relentless.",
    },
    {
      name: "Neelam Mahmood",
      case: "Divorce & Custody",
      quote: "I was terrified of losing my kids. My attorney at Shahan Law was a bulldog in the courtroom but compassionate with me. I got full custody.",
    }
  ];

  return (
    <section id="reviews" className="bg-slate-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-slate-300">
            We measure our success by the lives we've changed. Read what our past clients have to say about our aggressive representation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-700/50" />
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-300 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-amber-500 text-sm font-medium uppercase tracking-wider">{testimonial.case}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800 px-6 py-4 rounded-full border border-slate-700">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-600 overflow-hidden">
                  <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Join 500+ Satisfied Clients</p>
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <span className="text-slate-400 ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
