import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wsj.jpg";
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-4xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold font-serifDisplay text-foreground">
            [LOGO]
          </div>
          <nav className="hidden sm:flex space-x-4 md:space-x-8 text-sm font-medium">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Fitness
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Wellness
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors sm:block hidden">
              Nutrition
            </a>
          </nav>
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
              Updated Dec 15, 2024
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serifDisplay font-bold leading-tight text-foreground">
              Former Pharmacist Reveals the $39.99 GLP-1 Alternative That Doctors Rarely Mention
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              It costs 97% less than Ozempic and skips the side effects that derail most patients
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-3 py-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">RP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Dr. Robert Phillips, PharmD</p>
              <p className="text-xs text-muted-foreground">Former Community Pharmacist, 18 Years</p>
            </div>
          </div>

          <Separator />

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg animate-scale-in">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-muted/20 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v1.5h16V5a2 2 0 00-2-2H4zm14 3.5H2V15a2 2 0 002 2h12a2 2 0 002-2V6.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Pharmacist reviewing GLP-1 alternatives</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-base md:prose-lg max-w-none space-y-6">
            <p className="text-foreground leading-relaxed">
              For the past two years, I've watched the Ozempic craze take over pharmacy counters across the country. People came in hopeful—desperate for something to finally work—but left with a $1,400 monthly prescription and a long list of possible side effects.
            </p>

            <p className="text-foreground leading-relaxed">
              It didn't sit right with me. After 18 years owning and operating three community pharmacies, I know that the medical world often hides cheaper, safer, and equally effective solutions—sometimes for decades.
            </p>

            <div className="w-full h-[200px] md:h-[250px] bg-muted/20 rounded-xl flex items-center justify-center my-8">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Cost comparison chart: Ozempic vs alternatives</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              So when one of my most loyal customers asked if there was anything better and more affordable, I started digging. What I found shocked me:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Ingredients with solid clinical research for supporting your <em>own</em> GLP-1 production (your body's natural appetite control hormone)</li>
              <li>A delivery system first perfected in military hospitals that makes these ingredients up to 5× more bioavailable than pills</li>
              <li>A price tag small enough to fit into nearly any household budget</li>
            </ul>

            <p className="text-foreground leading-relaxed font-medium">
              The best part? It's available over the counter, no insurance battles required.
            </p>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              Why Your Doctor Probably Won't Mention This
            </h2>

            <p className="text-foreground leading-relaxed">
              There's no conspiracy theory here—it's simple economics. Pharmaceutical companies have no financial incentive to promote a $39.99 alternative when they can sell you a $1,400 prescription.
            </p>

            <p className="text-foreground leading-relaxed">
              Doctors, for their part, are trained to prescribe what's approved and readily available in their system. And while they may know about natural GLP-1 support, they rarely have the time to research the delivery methods or source products themselves.
            </p>

            <div className="w-full h-[180px] bg-muted/20 rounded-xl flex items-center justify-center my-6">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm">Doctor-patient consultation about alternatives</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              That's why it often falls to pharmacists—those of us who see the daily struggles at the counter—to connect the dots.
            </p>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Problem With GLP-1 Medications
            </h2>

            <p className="text-foreground leading-relaxed">
              If you've looked into Ozempic, Wegovy, or other GLP-1 drugs, you've likely run into one or more of these issues:
            </p>

            <ol className="list-decimal pl-6 space-y-3 text-foreground">
              <li><strong>Cost that breaks the bank</strong> – The average out-of-pocket price is $1,400/month. Insurance approvals are difficult, and even when approved, coverage gaps are common.</li>
              <li><strong>Side effects that stop you cold</strong> – Nausea, vomiting, constipation, and a slowed digestive system (gastroparesis) can make life miserable.</li>
              <li><strong>Nutrient absorption problems</strong> – When digestion slows, your body struggles to absorb the very vitamins and minerals you need to stay healthy.</li>
              <li><strong>Access barriers</strong> – Many doctors won't prescribe unless you meet strict BMI or diabetes criteria.</li>
              <li><strong>Needles and refrigeration</strong> – Weekly injections aren't for everyone, and they require careful handling.</li>
            </ol>

            <div className="w-full h-[220px] bg-muted/20 rounded-xl flex items-center justify-center my-8">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Common GLP-1 medication side effects infographic</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Little-Known Alternative
            </h2>

            <p className="text-foreground leading-relaxed">
              While researching options for my customer, I came across declassified WWII medical records. In them, military medics described using <em>transdermal delivery</em>—absorbing ingredients through the skin—to treat soldiers with damaged digestive systems.
            </p>

            <p className="text-foreground leading-relaxed">
              Hospitals have been delivering hormones and other medications this way for decades. Yet for metabolic health, the concept never made it to the mainstream supplement market—until recently.
            </p>

            <div className="w-full h-[200px] bg-muted/20 rounded-xl flex items-center justify-center my-6">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h1a1 1 0 001-1V3a2 2 0 012 2v6.447a1 1 0 001.708.708l2.292-2.293a1 1 0 101.415 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.415L8 9.707V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Historical medical documents and transdermal patches</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              Today, a small number of companies are using this delivery method for natural GLP-1 support ingredients, allowing them to bypass the stomach entirely and absorb directly into the bloodstream.
            </p>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Science of Natural GLP-1 Support
            </h2>

            <p className="text-foreground leading-relaxed">
              I looked for ingredients with clinical evidence, not hype. Four stood out:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-foreground">
              <li><strong>Berberine</strong> – In studies, reduced food intake by 47.5% and improved blood sugar levels on par with prescription metformin.</li>
              <li><strong>Lemon Fruit Extract (Eriomin)</strong> – Increased natural GLP-1 production by 17.5–22% in clinical trials.</li>
              <li><strong>Red Orange Extract</strong> – Led to a 4.2% body mass reduction and 3.9 cm waist loss over six months.</li>
              <li><strong>Saffron Extract</strong> – In double-blind studies, decreased hunger by 69% and sugar cravings by 65%.</li>
            </ul>

            <div className="w-full h-[240px] bg-muted/20 rounded-xl flex items-center justify-center my-8">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Clinical study results for natural GLP-1 ingredients</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              These ingredients address the same hormone pathway as prescription GLP-1s—but do it naturally, without forcing your body into digestive distress.
            </p>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              Why Transdermal Delivery Changes Everything
            </h2>

            <p className="text-foreground leading-relaxed">
              Most supplements are taken orally, meaning they have to survive stomach acid, digestive enzymes, and poor gut motility—especially in people over 45, when absorption can drop by as much as 80%.
            </p>

            <p className="text-foreground leading-relaxed">
              With a <strong>medical-grade patch</strong>, the ingredients skip the digestive system entirely. The result:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li><strong>Absorption rates of 95%+</strong> (vs. 15–20% for capsules)</li>
              <li><strong>Steady release</strong> over eight hours, avoiding peaks and crashes</li>
              <li><strong>No digestive side effects</strong> to derail your progress</li>
            </ul>

            <div className="w-full h-[200px] bg-muted/20 rounded-xl flex items-center justify-center my-8">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Transdermal absorption vs oral delivery diagram</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The 5 Biggest Advantages Over Prescription GLP-1s
            </h2>

            <p className="text-foreground leading-relaxed mb-6">Here's how this approach stacks up:</p>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Problem With GLP-1 Medications</th>
                    <th className="border border-border p-4 text-left font-semibold text-foreground">Transdermal GLP-1 Support Patch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 text-foreground">$1,400/month average cost</td>
                    <td className="border border-border p-4 text-foreground font-medium">$39.99/month—97% cheaper</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 text-foreground">Nausea, vomiting, gastroparesis</td>
                    <td className="border border-border p-4 text-foreground font-medium">Minimal to no side effects</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-foreground">Poor nutrient absorption</td>
                    <td className="border border-border p-4 text-foreground font-medium">95%+ absorption rate</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 text-foreground">Requires prescription & approvals</td>
                    <td className="border border-border p-4 text-foreground font-medium">Over-the-counter availability</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-foreground">Weekly injections</td>
                    <td className="border border-border p-4 text-foreground font-medium">Simple daily patch</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              Real-World Example
            </h2>

            <p className="text-foreground leading-relaxed">
              Margaret, 56, had been struggling with weight gain since menopause. She wanted to try Ozempic but couldn't get insurance approval—and couldn't afford the cash price.
            </p>

            <p className="text-foreground leading-relaxed">
              When I told her about the patch, she was skeptical. "If it's that cheap, it can't work," she said.
            </p>

            <div className="w-full h-[180px] bg-muted/20 rounded-xl flex items-center justify-center my-6">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Patient success story - Margaret's transformation</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              Three months later, she returned to the pharmacy grinning:
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-base md:text-lg text-muted-foreground my-6 bg-muted/30 py-4 rounded-r-lg">
              "I'm down 28 pounds. My doctor said my blood work looks better than it has in years. And I'm saving over $1,200 a month compared to Ozempic."
            </blockquote>

            <p className="text-foreground leading-relaxed">
              Her cravings had dropped, her energy was back, and for the first time in years, she felt in control.
            </p>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              My Professional Rankings
            </h2>

            <p className="text-foreground leading-relaxed">
              After reviewing dozens of cases and comparing research, here's how I'd rank the best GLP-1 alternatives:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">#1 – Transdermal GLP-1 Support Patch</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-foreground mb-3">
                  <li><strong>Cost:</strong> $39.99/month</li>
                  <li><strong>Absorption:</strong> 95%+</li>
                  <li><strong>Side Effects:</strong> Minimal</li>
                  <li><strong>Convenience:</strong> One patch per day, 8-hour delivery</li>
                </ul>
                <p className="text-sm text-foreground"><strong>Why #1:</strong> Only method that fully bypasses digestion, delivers all four proven ingredients, and works with your natural GLP-1 production.</p>
              </div>

              <div className="bg-muted/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">#2 – High-Potency Berberine Capsules</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-foreground mb-3">
                  <li><strong>Cost:</strong> $45–65/month</li>
                  <li><strong>Absorption:</strong> 15–20%</li>
                  <li><strong>Side Effects:</strong> Digestive upset in some users</li>
                </ul>
                <p className="text-sm text-foreground"><strong>Why #2:</strong> Strong research support, but limited by poor absorption and tolerance.</p>
              </div>

              <div className="bg-muted/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">#3 – Compounded GLP-1 Prescriptions</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-foreground mb-3">
                  <li><strong>Cost:</strong> $300–500/month</li>
                  <li><strong>Absorption:</strong> High (injection)</li>
                  <li><strong>Side Effects:</strong> Same as brand-name GLP-1s</li>
                </ul>
                <p className="text-sm text-foreground"><strong>Why #3:</strong> Lower cost than branded drugs but still high, with injection-related side effects.</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
              The Bottom Line
            </h2>

            <p className="text-foreground leading-relaxed">
              If you can afford and tolerate prescription GLP-1s, they can be effective. But if you're looking for:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>A <em>dramatically</em> lower price</li>
              <li>No insurance hassles</li>
              <li>No digestive side effects</li>
              <li>And clinically proven results without needles</li>
            </ul>

            <p className="text-foreground leading-relaxed">
              …the <strong>transdermal GLP-1 Support Patch</strong> is worth serious consideration.
            </p>

            <div className="w-full h-[200px] bg-muted/20 rounded-xl flex items-center justify-center my-8">
              <div className="text-center text-muted-foreground">
                <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">30-day money-back guarantee seal</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              At $39.99/month with a 30-day money-back guarantee, it's the kind of low-risk, high-reward solution the pharmaceutical industry will never promote—but one I'm happy to share after decades of seeing patients forced into impossible choices.
            </p>

            <p className="text-foreground leading-relaxed">
              Your health shouldn't depend on your income, your insurance company's approval, or your tolerance for side effects. Sometimes the best solution isn't new at all—it's an old medical idea, rediscovered, refined, and finally made available to the public.
            </p>

            <div className="text-center my-8">
              <div className="inline-block bg-primary/10 border-2 border-primary rounded-xl p-6">
                <p className="text-lg font-semibold text-foreground mb-2">See Today's Availability</p>
                <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm font-medium text-foreground mb-3">Related Topics:</p>
            <div className="flex flex-wrap gap-2">
              {["GLP-1", "Weight Loss", "Natural Supplements", "Transdermal Delivery", "Alternative Medicine"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
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
                        $39.99 GLP-1 Alternative - 97% Cheaper Than Ozempic
                      </p>
                      <p className="text-xs text-muted-foreground hidden sm:block">
                        30-day money-back guarantee • Over-the-counter availability
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button size="sm" className="hidden sm:inline-flex">
                    See Availability
                  </Button>
                  <Button size="sm" className="sm:hidden px-3">
                    Get Now
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