import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Star, Scale, TrendingDown } from "lucide-react";

const CTACard = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Main CTA Card */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 md:p-10 text-center shadow-2xl border border-primary/20">
        
        {/* Guarantee Badge */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 shadow-lg border-2 border-white/20 text-sm font-bold">
            <Shield className="w-4 h-4 mr-2" />
            100% MONEY-BACK GUARANTEE
          </Badge>
        </div>

        {/* Stars Rating */}
        <div className="flex justify-center gap-1 mb-4 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-white/90 text-sm font-medium">4.9/5 (2,847 reviews)</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Lose <span className="text-yellow-300">30 Pounds</span> in{" "}
          <span className="text-yellow-300">90 Days</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl">or It's</span>{" "}
          <span className="text-yellow-300 text-4xl md:text-5xl lg:text-6xl font-black">
            FREE
          </span>
        </h2>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
          Join thousands who've transformed their lives with our proven 97% cheaper alternative to expensive GLP-1 medications
        </p>

        {/* Before/After Icons */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto backdrop-blur">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <span className="text-white/80 text-sm">Before</span>
          </div>
          <TrendingDown className="w-8 h-8 text-yellow-300" />
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <span className="text-white/80 text-sm">After</span>
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-left max-w-3xl mx-auto">
          {[
            "No nausea or digestive issues",
            "97% cheaper than Ozempic",
            "95%+ absorption rate",
            "No prescription needed",
            "Simple daily patch",
            "30-day money-back guarantee"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white/90 font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 border border-white/20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-white/60 text-sm line-through">$1,400/month</div>
              <div className="text-white/80 text-xs">Typical GLP-1</div>
            </div>
            <div className="text-yellow-300 text-2xl">→</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">$39.99</div>
              <div className="text-white/80 text-sm">/month</div>
            </div>
          </div>
          <div className="text-green-400 font-bold text-lg">
            You Save $1,360+ Every Month!
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl px-12 py-4 h-auto shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/30"
        >
          <span className="flex items-center gap-3">
            Start Your Transformation
            <CheckCircle className="w-6 h-6" />
          </span>
        </Button>

        {/* Urgency Text */}
        <p className="text-white/80 text-sm mt-4 font-medium">
          ⚡ Limited Time: Free shipping + bonus meal plan guide
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Shield className="w-4 h-4" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>No Auto-Billing</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Star className="w-4 h-4" />
            <span>A+ BBB Rating</span>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-8 bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10">
          <blockquote className="text-white/90 italic text-lg mb-3">
            "I lost 28 pounds in 3 months and saved over $3,600 compared to Ozempic. This patch changed my life!"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">M</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Margaret S.</div>
              <div className="text-white/60 text-sm">Verified Customer</div>
            </div>
          </div>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default CTACard;