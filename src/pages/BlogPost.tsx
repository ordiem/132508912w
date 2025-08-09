import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

const BlogPost = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      
      setShowCTA(scrollPercentage > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO metadata
  useEffect(() => {
    document.title = "Pharmacist Reveals $39.99 GLP-1 Alternative | Updated July 2025";
    const metaContent = "See if this $39.99 GLP-1 alternative is still available today. 85%+ absorption via transdermal patch, 97% cheaper than injectables.";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', metaContent);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-4xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold font-serifDisplay text-foreground">
            [LOGO]
          </div>
          <div className="hidden sm:block">
            <span className="text-muted-foreground/60 text-sm font-medium">Advertorial</span>
          </div>
          <button className="sm:hidden p-2 text-muted-foreground hover:text-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Article Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <article className="space-y-8 animate-fade-in">
          {/* Category & Metadata */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                Health
              </Badge>
              <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                Medical
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              Updated July 15, 2025
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serifDisplay font-bold leading-tight text-foreground">
              Pharmacist Reveals $39.99 Alternative to Costly GLP-1 Medications
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              It costs 97% less than prescriptions and skips the side effects that derail most patients
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-3 py-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">RP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Robert Phillips</p>
              <p className="text-xs text-muted-foreground">Former Community Pharmacist, 7 Years</p>
            </div>
          </div>

          <Separator />

          {/* Hero Image */}
          <figure className="w-full rounded-lg border border-border overflow-hidden shadow-sm bg-card">
            <img
              src="/lovable-uploads/7ef499b0-dfd7-4a39-9301-b661c57589f2.png"
              alt="Hero image: GLP-1 alternative breakthrough — pharmacist with natural solution comparison"
              className="w-full h-80 object-cover"
              loading="eager"
              decoding="async"
            />
          </figure>

          {/* Article Content */}
          <div className="prose prose-base md:prose-lg max-w-none space-y-8">
            
            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              Why I Started Looking for Another Option
            </h2>
            
            <p className="text-foreground leading-relaxed text-lg">
              For the past two years, I've watched the GLP-1 injectable craze sweep through pharmacies. 
              Patients arrived with hope—but many left with prescriptions costing over a thousand dollars a month and side effects they didn't expect.
            </p>
            
            <p className="text-foreground leading-relaxed">
              Working behind the counter for seven years, I've seen firsthand how these medications can transform health for some people… 
              but I've also seen how cost and side effects push many to give up before they reach their goals.
            </p>

            <p className="text-foreground leading-relaxed">
              One of my favorite regular customers—a woman named Margaret—was in that exact situation.
            </p>

            {/* Pharmacy consultation scene */}
            <figure className="w-full rounded-lg border border-border overflow-hidden my-8 shadow-sm bg-card">
              <img
                src="/lovable-uploads/b6f06d4a-6b59-431f-a23c-1e142073677c.png"
                alt="Pharmacy consultation scene — pharmacist helping customer"
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <h3 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Conversation That Started It All
            </h3>
            
            <div className="bg-secondary/10 border-l-4 border-primary pl-6 py-6 rounded-r-lg">
              <p className="text-foreground leading-relaxed mb-4">
                Margaret had been coming to the pharmacy for years. She was always upbeat, but one afternoon, I could see something was weighing on her.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                She told me she'd been using a GLP-1 prescription for months. She'd lost some weight, but the nausea was exhausting. Worse, the cost was draining her savings.
              </p>
              <blockquote className="text-lg font-medium italic text-primary bg-primary/5 p-4 rounded-lg border">
                "Is there anything else out there? Something that actually works but doesn't make me feel sick—or cost a fortune?"
              </blockquote>
            </div>

            <p className="text-foreground leading-relaxed font-medium">
              That question stuck with me. Margaret wasn't just another customer—she trusted my advice. I decided to dig into the research and see if there was a better path.
            </p>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              What I Discovered
            </h2>
            
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-foreground">I set out to find an alternative that could:</h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Support the body's own GLP-1 production naturally</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Avoid the digestive side effects common with injectables</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Cost a fraction of the monthly price</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Be available without jumping through insurance hoops</span>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              After weeks of reading clinical studies and comparing products, I found four natural ingredients with strong evidence for supporting metabolic health—paired with a delivery method that made them dramatically more effective.
            </p>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              The Science Behind Natural GLP-1 Support
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              These ingredients target the same hunger-control hormone pathway as injectables, but work <em>with</em> the body instead of forcing it:
            </p>

            <div className="grid gap-6 mt-6">
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Berberine</h4>
                <p className="text-muted-foreground leading-relaxed">Reduced food intake by up to 47.5% in studies and improved blood sugar levels.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Lemon Fruit Extract (Eriomin)</h4>
                <p className="text-muted-foreground leading-relaxed">Increased natural GLP-1 production by 17.5–22%.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Red Orange Extract</h4>
                <p className="text-muted-foreground leading-relaxed">Reduced body mass and waist circumference over six months.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Saffron Extract</h4>
                <p className="text-muted-foreground leading-relaxed">Lowered hunger by 69% and cut sugar cravings by 65%.</p>
              </div>
            </div>

            <p className="text-lg font-medium text-foreground">
              But there was still one big obstacle: absorption.
            </p>

            {/* Scientific research illustration & absorption comparison */}
            <figure className="w-full rounded-lg border border-border overflow-hidden my-8 shadow-sm bg-card">
              <img
                src="/lovable-uploads/f00da2e4-d1f5-4266-82c9-c53c93aabb9a.png"
                alt="Scientific research illustration — natural ingredients and absorption comparison"
                className="w-full h-64 object-contain"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <h3 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              Why Absorption Matters More Than Most People Realize
            </h3>
            
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <p className="text-foreground leading-relaxed mb-4">
                By the time we hit our mid-40s, digestion isn't what it used to be. 
                Stomach acid production declines, gut motility slows, and enzyme levels drop—meaning oral supplements can lose up to <strong className="text-destructive">80% of their potency</strong> before they're absorbed.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                That's where the delivery method became the game-changer.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Transdermal Advantage
            </h3>
            
            <p className="text-foreground leading-relaxed mb-6">
              The product I found uses a medical-grade transdermal patch—ingredients are absorbed through the skin directly into the bloodstream. This bypasses the digestive system entirely, resulting in:
            </p>

            <div className="grid gap-4 mt-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">85%+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Superior Absorption</h4>
                  <p className="text-sm text-muted-foreground">vs. 15–20% for capsules</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">8hrs</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Steady 8-hour release</h4>
                  <p className="text-sm text-muted-foreground">Instead of spikes and crashes</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Minimal to no digestive side effects</h4>
                  <p className="text-sm text-muted-foreground">No stomach upset or nausea</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              How It Stacks Up Against GLP-1 Injectables
            </h2>

            <div className="overflow-x-auto shadow-lg rounded-lg my-8">
              <table className="w-full border-collapse bg-card">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Problem With GLP-1 Injectables</th>
                    <th className="text-left p-4 font-semibold text-primary">Transdermal GLP-1 Support Patch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-foreground">$1,000+ monthly cost</td>
                    <td className="p-4 font-semibold text-primary">$39.99/month — 97% cheaper</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-foreground">Nausea, vomiting, gastroparesis</td>
                    <td className="p-4 font-semibold text-primary">Minimal to no side effects</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-foreground">Poor nutrient absorption</td>
                    <td className="p-4 font-semibold text-primary">85%+ absorption</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-foreground">Requires prescription & insurance approval</td>
                    <td className="p-4 font-semibold text-primary">Over-the-counter availability</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-foreground">Weekly injections</td>
                    <td className="p-4 font-semibold text-primary">Simple daily patch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              Margaret's Experience
            </h2>
            
            <div className="bg-secondary/10 border-l-4 border-secondary pl-6 py-6 rounded-r-lg">
              <p className="text-foreground leading-relaxed mb-4">
                I shared my research with Margaret and told her about the patch. She was skeptical—after all, she'd tried countless pills and powders over the years.
              </p>
              
              <p className="text-foreground leading-relaxed mb-4">
                But a month later, she was back at the counter with a smile I hadn't seen in months:
              </p>
              
              <blockquote className="bg-card border rounded-lg p-4 mb-6 shadow-sm">
                <p className="text-lg font-medium mb-2 text-foreground">
                  "I've lost 12 pounds already," she told me, "and I feel good. No nausea, no dizziness, and I'm not thinking about food all day."
                </p>
              </blockquote>
              
              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                <p className="font-semibold mb-3 text-foreground">Three months in:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">28 pounds lost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Energy was back</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Doctor impressed with blood work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Saving over $1,200/month</span>
                  </div>
                </div>
                <p className="text-foreground font-medium">
                  The best part? She was saving over $1,200 a month compared to injectables.
                </p>
              </div>
            </div>

            {/* Image Placeholder 3 */}
            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg border border-border flex items-center justify-center my-8 shadow-sm">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Success transformation</p>
                <p className="text-xs text-muted-foreground">Before/after results visualization</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              Ranking the Alternatives
            </h2>

            <div className="space-y-6">
              <div className="bg-primary/5 border-2 border-primary rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    #1
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Transdermal GLP-1 Support Patch</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Cost:</span> 
                    <span className="text-foreground">$39.99/month</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Absorption:</span> 
                    <span className="text-foreground">85%+</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Side Effects:</span> 
                    <span className="text-foreground">Minimal</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Convenience:</span> 
                    <span className="text-foreground">One patch per day, 8-hour delivery</span>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-foreground">
                    <strong>Why #1:</strong> Bypasses digestion, includes all four clinically proven ingredients, supports natural GLP-1 production.
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    #2
                  </div>
                  <h3 className="text-xl font-bold text-foreground">High-Potency Berberine Capsules</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Cost:</span> 
                    <span className="text-foreground">$45–65/month</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Absorption:</span> 
                    <span className="text-foreground">15–20%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Side Effects:</span> 
                    <span className="text-foreground">Digestive upset possible</span>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-foreground">
                    <strong>Why #2:</strong> Strong evidence, but poor absorption limits effectiveness.
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-muted-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                    #3
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Compounded GLP-1 Prescriptions</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Cost:</span> 
                    <span className="text-foreground">$300–500/month</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Absorption:</span> 
                    <span className="text-foreground">High (injection)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Side Effects:</span> 
                    <span className="text-foreground">Same as other injectables</span>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-foreground">
                    <strong>Why #3:</strong> Lower cost than brand-name injectables, but still costly and comes with side effects.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">
              The Bottom Line
            </h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-lg p-8 shadow-md">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                If you can afford and tolerate GLP-1 injectables, they can be effective. But if you're tired of the price, the side effects, and the insurance battles, the transdermal patch is worth a closer look.
              </p>
              
              <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-primary">$39.99</div>
                  <div>
                    <div className="font-semibold text-foreground">per month</div>
                    <div className="text-sm text-primary font-medium">Lose 30 lbs in 90 days or it's FREE</div>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 mb-3">
                  <p className="text-sm font-medium text-foreground">
                    ✓ Over-the-counter availability • ✓ No prescription needed
                  </p>
                </div>
                <p className="text-foreground">
                  It's one of the lowest-risk, highest-reward options I've seen in my career.
                </p>
              </div>
              
              <p className="text-lg font-medium text-foreground">
                Your health shouldn't be limited by your budget or your ability to handle side effects. Sometimes, the smartest choice isn't another expensive prescription—it's a smarter way to deliver proven ingredients your body already knows how to use.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Check Availability</h3>
              <p className="text-lg mb-6 opacity-90">
                See If This $39.99 Alternative Is Still Available Today
              </p>
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 shadow-md">
                Check Availability Now →
              </Button>
            </div>

            {/* Resources and Studies Section */}
            <div className="bg-card border rounded-lg p-8 mt-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mb-6">
                Resources and Studies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Clinical Research Summary</h3>
                  <div className="space-y-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground">BERBERINE — Metabolic Enhancement</h4>
                      <p className="text-muted-foreground">Key Clinical Results:</p>
                      <ul className="list-disc pl-5 mt-1 text-foreground/90">
                        <li>Cholesterol Reduction: LDL decreased by 1.77 mmol/L in meta-analysis of 1,449 participants</li>
                        <li>Blood Sugar Control: Fasting glucose reduced by 0.65 mmol/L across multiple trials</li>
                        <li>Insulin Sensitivity: HOMA-IR improved by 1.25 points vs placebo</li>
                        <li>Triglyceride Reduction: Decreased by 0.94 mmol/L in clinical studies</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-1">Source: Ye et al., Frontiers in Pharmacology (2021)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">ERIOMIN (Lemon Extract) — GLP-1 Enhancement</h4>
                      <p className="text-muted-foreground">Key Clinical Results:</p>
                      <ul className="list-disc pl-5 mt-1 text-foreground/90">
                        <li>GLP-1 Increase: 17% elevation in natural GLP-1 production (P &lt; 0.05)</li>
                        <li>Glucose Improvement: 5% reduction in hyperglycemia over 12 weeks</li>
                        <li>Insulin Function: 11% improvement in insulin resistance markers</li>
                        <li>Anti-Inflammatory: Significant reduction in systemic inflammation</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-1">Source: Cesar et al., Journal of Medicinal Food (2022)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">MORO BLOOD ORANGE EXTRACT — Weight Management</h4>
                      <p className="text-muted-foreground">Key Clinical Results:</p>
                      <ul className="list-disc pl-5 mt-1 text-foreground/90">
                        <li>Weight Loss: 4.2% body weight reduction vs 2.2% placebo over 6 months</li>
                        <li>Waist Reduction: 3.9 cm decrease vs 1.7 cm placebo</li>
                        <li>Hip Circumference: 3.4 cm reduction vs 2.0 cm placebo</li>
                        <li>Body Composition: Significant improvements in visceral and subcutaneous fat</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-1">Source: Briskey et al., Nutrients (2022)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">SAFFRON EXTRACT — Appetite Control</h4>
                      <p className="text-muted-foreground">Key Clinical Results:</p>
                      <ul className="list-disc pl-5 mt-1 text-foreground/90">
                        <li>Hunger Reduction: 69% of participants reported decreased hunger vs 0% placebo</li>
                        <li>Snacking Control: Significant reduction in compulsive snacking frequency</li>
                        <li>Weight Management: Greater body weight reduction than placebo (P &lt; 0.01)</li>
                        <li>Satiety Enhancement: Improved satiety through serotonin pathway modulation</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-1">Source: Gout et al., Nutrition Research (2010)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">Study Quality Summary</h4>
                      <p className="text-muted-foreground">Research Standards:</p>
                      <ul className="list-disc pl-5 mt-1 text-foreground/90">
                        <li>All results from human clinical trials (no animal studies)</li>
                        <li>Published in peer-reviewed scientific journals</li>
                        <li>Randomized, double-blind, placebo-controlled designs</li>
                        <li>Statistically significant results (P &lt; 0.05)</li>
                        <li>Proper sample sizes and study durations</li>
                      </ul>
                      <p className="text-foreground mt-2">Clinical Significance: These compounds demonstrate legitimate, measurable benefits for metabolic health, weight management, and appetite control when evaluated through rigorous scientific methodology.</p>
                    </div>
                  </div>
                </div>


                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Important Medical Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    This information is for educational purposes only and has not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult with your healthcare provider before starting any new supplement regimen, especially if you have existing medical conditions or take medications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Sticky CTA */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 ease-out translate-y-0">
          <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-t border-border shadow-2xl">
            <div className="container max-w-4xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        $39.99 GLP-1 Alternative - 97% Cheaper
                      </p>
                      <p className="text-xs text-muted-foreground hidden sm:block">
                        Lose 30 pounds in 90 days or it's FREE • Over-the-counter availability
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button size="sm" className="hidden sm:inline-flex">
                    Check Availability
                  </Button>
                  <Button size="sm" className="sm:hidden px-3">
                    Check Now
                  </Button>
                  <button
                    onClick={() => setShowCTA(false)}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;