import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Beaker, X, AlertTriangle } from 'lucide-react';
const GLP1Shortage = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrolled / height * 100;
      setShowStickyCTA(scrollPercent > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-display font-bold text-primary">HEALTHY LIVING</h1>
            <span className="text-xs px-2 py-1 bg-accent/10 text-accent-foreground/50 rounded uppercase tracking-wider font-medium opacity-50">
              Advertorial
            </span>
          </div>
          <button className="md:hidden p-2">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <article className="animate-fade-in">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Hero Image */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <img src="/lovable-uploads/f29e0bcc-1fcc-414d-a3a0-af0869273cff.png" alt="Pharmacy scene showing concerned patients and pharmacist discussing GLP-1 medication shortage with 'out of stock' sign visible, illustrating the current crisis in medication availability" className="w-full h-[300px] md:h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
              BREAKING NEWS • HEALTH CRISIS • PHARMACEUTICAL SHORTAGE
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-foreground">
              BREAKING: GLP-1 SHORTAGE HITS CRISIS LEVEL — What Smart Patients Are Doing Instead
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-body mb-8 leading-relaxed">
              A quiet crisis is unfolding in pharmacies across America. Prescriptions are being written—but not filled.
            </div>
          </div>

          {/* Crisis Alert */}
          

          {/* Opening Section */}
          <section className="mb-12">
            <p className="drop-cap text-lg leading-relaxed text-foreground font-body mb-6">
              The cause? A critical shortage of GLP-1 medications that millions relied on to support appetite regulation and metabolic health.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Demand for these injectables—once the domain of specialists—has surged. Now, general practitioners, weight clinics, and even telehealth apps prescribe them by the thousands each day.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              And the system is buckling.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Patients with valid prescriptions are being turned away. No alternatives. No timelines. Just silence.
            </p>

            <p className="text-xl font-body font-bold text-primary mb-6">
              The promise of GLP-1 support has run headfirst into pharmaceutical reality.
            </p>
          </section>

          {/* Patient Story */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              "I Had to Cut My Dose in Half… Then Again… Then I Gave Up."
            </h2>

            <div className="bg-gradient-to-r from-muted/30 to-accent/10 border border-muted rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Jennifer Fields, 39, didn't expect to ration her medication like it was the last can of soup in a storm shelter.
              </p>

              <blockquote className="text-xl font-body italic text-foreground leading-relaxed mb-6">
                "I went from feeling in control to feeling like I was free-falling."
              </blockquote>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                First, the pharmacy delays. Then, her insurance stopped covering refills. With supply dwindling, she stretched a month's dose across three.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body">
                She's not alone.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Thousands of patients now face skyrocketing out-of-pocket costs, insurance denials, and the return of symptoms they thought they'd left behind.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Some fly to other states in search of supply. Others turn to grey markets—risky at best, dangerous at worst.
            </p>

            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-xl font-body italic text-foreground leading-relaxed">
                "Patients describe a creeping anxiety—like something vital was taken from them."
              </p>
              <cite className="text-muted-foreground font-body mt-2 block">— Dr. Corey Nguyen, Behavioral Specialist</cite>
            </blockquote>

            <p className="text-lg leading-relaxed text-foreground font-body">
              For many, the medication was more than a tool—it was a lifeline. And now, it's gone.
            </p>

            {/* Patient Story Image */}
            <div className="my-8 rounded-lg overflow-hidden border border-border">
              
            </div>
          </section>

          {/* Why the Shortage */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Why the Shortage Happened and Why It Won't End Soon</h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Pharmaceutical insiders call it "a perfect storm."
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              When demand for GLP-1 injectables tripled in under 18 months, manufacturers couldn't keep up. Production of synthetic peptides is precise, expensive, and time-consuming.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-xl font-body font-bold text-primary mb-4">
                You can't make these drugs in a garage.
              </p>
              <p className="text-lg leading-relaxed text-foreground font-body">
                Add global shipping delays, raw material bottlenecks, and ambiguous FDA guidance on off-label use, and the result is a supply chain so fragile, it snapped.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Even patients willing to pay full price can't get access.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body">
              And those who do? Often told it's their last refill for the foreseeable future.
            </p>

            {/* Manufacturing Crisis Image */}
            <div className="my-8 rounded-lg overflow-hidden border-2 border-primary/20">
              <img src="/lovable-uploads/f1a4b5c6-25ea-4775-b3ea-8a7427d5bfca.png" alt="Pharmaceutical manufacturing facility with workers processing medication bottles on conveyor belts, illustrating the complex supply chain challenges causing GLP-1 shortages" className="w-full h-auto" />
            </div>
          </section>

          {/* Natural GLP-1 Science */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What Science Says About Natural GLP-1 Support
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Here's what most people don't know: GLP-1 is not a drug. It's a natural hormone your body produces after eating.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              <p className="text-xl font-body font-bold text-primary mb-6">
                Its role? Signal fullness. Reduce appetite. Support metabolism.
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">Pharmaceuticals mimic GLP-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">But we may be able to support our body's own GLP-1 production—naturally</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-8">
              A 2023 clinical review in the Journal of Metabolic Health highlighted four plant-based compounds that may support GLP-1 pathways*:
            </p>

            <div className="grid gap-6 mb-8">
              {[{
              name: 'Berberine',
              description: 'An alkaloid shown to support healthy glucose metabolism.*',
              icon: <Beaker className="w-6 h-6" />
            }, {
              name: 'Lemon Fruit Extract',
              description: 'Rich in polyphenols that may assist digestive signaling.*',
              icon: <Clock className="w-6 h-6" />
            }, {
              name: 'Saffron Extract',
              description: 'Studied for its potential to reduce snacking and emotional eating.*',
              icon: <Shield className="w-6 h-6" />
            }, {
              name: 'Red Orange Extract',
              description: 'Known to support metabolic balance and oxidative health.*',
              icon: <CheckCircle className="w-6 h-6" />
            }].map((ingredient, index) => <div key={index} className="bg-gradient-to-r from-card to-accent/5 border border-border rounded-lg p-6 hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0">
                      {ingredient.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-foreground mb-2">
                        {ingredient.name}
                      </h4>
                      <p className="text-muted-foreground font-body">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Dr. Heather Mitchell, a former NIH nutritional biochemist, studied these ingredients—but saw one problem: oral supplements often lose potency in the digestive tract.
            </p>

            <p className="text-xl font-body font-bold text-primary">
              Her solution? Deliver them through the skin.
            </p>

            {/* Natural Solution Image */}
            <div className="my-8 rounded-lg overflow-hidden border-2 border-primary/20">
              <img src="/lovable-uploads/4df81861-6916-4ccd-85e3-907b4123d70e.png" alt="Comparison diagram showing GLP-1 patches vs pills and supplements - demonstrating transdermal delivery with 8-hour sustained release through skin absorption" className="w-full h-auto" />
            </div>
          </section>

          {/* The Patch Solution */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The GLP-1 Patch: A Smarter Way to Support Your Body's Natural Appetite Signals
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              After two years of formulation and testing, Dr. Mitchell and her team developed a transdermal patch—a topical delivery system that bypasses digestion and offers 8 hours of steady, controlled release.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              <p className="text-2xl font-body font-bold text-primary mb-6 text-center">
                It's called the GLP-1 Patch.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Unlike pills or powders, this patch is discreet, adhesive, and effortless. Peel. Apply. Go about your day.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No injections</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No waiting lists</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No digestive distress</p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body">
              Just a patch.
            </p>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              What Early Users Reported
            </h3>

            <p className="text-lg leading-relaxed text-foreground font-body mb-8">
              Here's what early users reported in a controlled consumer trial:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">69%</div>
                  <div className="text-muted-foreground font-body">decrease in hunger*</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">55%</div>
                  <div className="text-muted-foreground font-body">fewer snacking episodes*</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">47.5%</div>
                  <div className="text-muted-foreground font-body">reduction in overall food intake*</div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              And the benefits build over time:
            </p>

            <div className="grid gap-4 mb-8">
              {[{
              timeframe: 'Week 1–2',
              result: 'Noticeable appetite reduction*'
            }, {
              timeframe: 'Week 3–4',
              result: 'Enhanced natural GLP-1 support*'
            }, {
              timeframe: 'Week 5–8',
              result: 'Improved metabolism support*'
            }, {
              timeframe: 'Week 9–12',
              result: 'Visible improvements in body composition*'
            }].map((item, index) => <div key={index} className="flex items-center gap-4 bg-accent/5 p-4 rounded-lg">
                  <div className="font-bold text-primary min-w-fit">{item.timeframe}:</div>
                  <div className="text-foreground font-body">{item.result}</div>
                </div>)}
            </div>
          </section>

          {/* What To Do Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What To Do If You've Been Affected by the GLP-1 Shortage
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              You have more options than you think.
            </p>

            <div className="grid gap-4 mb-8">
              {['Talk to your doctor about supporting your GLP-1 levels naturally', 'Avoid black market medications. The risks outweigh the rewards', 'Explore clinical data behind natural appetite-regulating compounds*', 'Consider alternatives that use advanced delivery systems', 'Stay informed—this crisis is evolving by the week'].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="font-body text-foreground">{item}</span>
                </div>)}
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body">
              For thousands, the GLP-1 Patch has become a compelling part of their daily appetite support routine.
            </p>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Logical Next Step
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Pharmaceutical pipelines are years away from catching up.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-8">
              If you're ready to support your body's natural GLP-1 activity*—without relying on an unstable supply chain—the GLP-1 Patch offers a science-backed, non-invasive option.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              

              <div className="text-center">
                <p className="text-xl font-body font-bold text-primary mb-4">
                  Results Guarantee
                </p>
                <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                  If you don't lose 30 pounds in 90 days while using the GLP-1 Patch as directed—it's free.
                </p>
                <p className="text-foreground font-body">
                  No fine print. No hoops. If you're not satisfied with your results, you'll get a full refund. Simple as that.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4 mb-4">
                Learn More and Order the GLP-1 Patch Today
              </Button>
              <p className="text-muted-foreground font-body">
                Available now. No prescription required.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-muted/20 border border-muted rounded-lg p-6 text-sm text-muted-foreground">
            <p className="mb-2">
              *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
            </p>
            <p>
              **Results from consumer trial. Individual results may vary.
            </p>
          </div>
        </article>
      </main>

      {/* Sticky CTA */}
      {showStickyCTA && <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 z-50 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="font-bold">Ready to try the GLP-1 Patch?</p>
              <p className="text-sm opacity-90">No prescription required • 90-day guarantee</p>
            </div>
            <Button variant="secondary" size="lg">
              Order Now
            </Button>
          </div>
        </div>}
    </div>;
};
export default GLP1Shortage;