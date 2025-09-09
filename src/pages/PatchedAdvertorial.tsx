import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Beaker, X } from 'lucide-react';
import heroImage from '@/assets/hero-wellness.jpg';
const PatchedAdvertorial = () => {
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
            <h1 className="text-lg font-display font-bold text-primary">50&Beyond</h1>
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
              <img 
                src="/lovable-uploads/5fd12bde-144d-44a8-bf22-340cdae61a4d.png" 
                alt="Confident woman in her 50s representing natural health and wellness empowerment" 
                className="w-full h-[300px] md:h-[350px] object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
              HEALTH • WOMEN'S WELLNESS • BREAKTHROUGH RESEARCH
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-foreground">
              The Natural GLP-1 Alternative That Requires No Injections
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-body mb-8 leading-relaxed">
              An 80-Year-Old Military Invention Is Helping Women Over 45 Control Cravings, Boost Energy, and Reignite Fat Loss. Without Pills, Needles, or Side Effects
            </div>
          </div>

          {/* Opening Hook */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="drop-cap text-lg leading-relaxed text-foreground font-body">
              If you're a woman over 45 and struggling with stubborn weight, blood sugar swings, or relentless food cravings... you may be missing the one thing that matters most: <span className="font-bold text-primary">absorption</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground font-body">
              You see, it's not just about what you take. It's about what your body can actually use.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body">
              And for millions of women, especially after age 45, that's where everything starts to go wrong.
            </p>
          </div>

          {/* GLP-1 Hormone Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Hidden Hormone Behind Your Hunger
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              You may not have heard of it, but GLP-1 is the hormone that governs nearly every aspect of your metabolism.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">It tells your brain when you're full</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">It regulates how quickly your stomach empties</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">It controls insulin, blood sugar, and how your body stores fat</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              GLP-1 is so effective, drug companies have built billion-dollar weight loss brands by synthetically mimicking it.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              But there's a catch.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Those drugs are expensive. They require injections. And they often come with serious side effects.
            </p>

            <p className="text-xl font-body font-bold text-primary mb-6">
              What if you could activate your body's own GLP-1 production naturally, without drugs, without needles, and without the risks?
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body">
              Turns out… you can. Thanks to a forgotten medical innovation born during the chaos of World War II.
            </p>
          </section>

          {/* Transdermal vs Pills Comparison */}
          <section className="mb-12">
            
          </section>

          {/* Historical Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The 1943 Military Medical Breakthrough That's Changing Women's Health Today
            </h2>

            <div className="bg-gradient-to-r from-muted/30 to-accent/10 border border-muted rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                In the final years of WWII, U.S. medics were faced with a brutal problem.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Wounded soldiers with stomach injuries couldn't take pills. They couldn't eat. They couldn't digest anything.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                And yet, they needed life-saving medicine fast.
              </p>

              <p className="text-xl font-body font-bold text-primary mb-6">
                The solution? Transdermal delivery—a way to send critical compounds through the skin, directly into the bloodstream.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body">
                It bypassed the gut entirely. No swallowing. No digestion. Just rapid, direct absorption.
              </p>
            </div>

            <p className="text-xl font-body font-semibold text-primary mb-6">
              It worked so well, this method is still used today in hospitals for:
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                {['Hormone replacement therapy', 'Smoking cessation', 'Pain management', 'Heart medications'].map((item, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-body text-foreground">{item}</span>
                  </div>)}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body">
              Now, 80 years later, that same battlefield discovery is being used to help women stimulate GLP-1 naturally and finally get their metabolism working again.
            </p>
          </section>

          {/* Historical Military Medical Image */}
          <section className="mb-12">
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="/lovable-uploads/ac3d4059-6944-438c-8f4a-116d60d88850.png" alt="Historical black and white photograph of military medics treating a wounded soldier during World War II, demonstrating early battlefield medical innovations" className="w-full h-auto object-cover" />
              <div className="p-4 bg-muted/20">
                <p className="text-sm text-muted-foreground font-body italic text-center">
                  World War II medics pioneered transdermal delivery methods to treat wounded soldiers when traditional medicine couldn't be administered orally.
                </p>
              </div>
            </div>
          </section>

          {/* Why Supplements Fail Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Why Most GLP-1 Supplements Stop Working After 45
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Dr. Sarah Chen, a metabolic researcher at Stanford Medical Center, first noticed the problem during routine blood tests.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              Women in their late 40s, 50s, and 60s were taking supplements—good ones, backed by science. Some were even taking prescription GLP-1 drugs.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              But their test results told a different story.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              They were still nutrient-deficient. Still gaining weight. Still fatigued.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-body mb-8">
              One patient—age 52—was spending hundreds of dollars every month on high-end supplements. Yet her labs showed she was absorbing almost nothing.
            </p>

            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-xl font-body italic text-foreground leading-relaxed">
                "These women weren't failing their supplements. Their supplements were failing them."
              </p>
              <cite className="text-muted-foreground font-body mt-2 block">— Dr. Sarah Chen</cite>
            </blockquote>

            <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
              <Beaker className="w-6 h-6 text-primary" />
              The Real Problem Is Absorption
            </h3>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              As you age, your body goes through three changes that drastically reduce how well you absorb nutrients:
            </p>

            <div className="grid gap-6 mb-8">
              {[{
              title: 'Stomach Acid',
              description: 'Kills up to 60% of nutrients before they leave the gut',
              icon: '🔥'
            }, {
              title: 'Liver Filtering',
              description: 'Removes another 40% through "first-pass metabolism"',
              icon: '🥘'
            }, {
              title: 'Slowed Digestion',
              description: 'Especially common in women taking GLP-1 injections like Ozempic',
              icon: '⏰'
            }].map((item, index) => <div key={index} className="bg-gradient-to-r from-card to-accent/5 border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
              <p className="text-lg font-body text-foreground">
                In short, even the most effective nutrients can't help you if they never make it into your bloodstream.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body">
              That's why Dr. Chen went back to a long-lost method from 1943—and gave it a modern purpose.
            </p>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The Patch That Helps Activate GLP-1—Naturally, Safely, and Effectively
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-body mb-6">
              After years of research, Dr. Chen and her team developed a medical-grade skin patch designed to deliver GLP-1 activating nutrients directly through the skin.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              <p className="text-2xl font-body font-bold text-primary mb-6 text-center">
                It's called Patched
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                And it's the first of its kind: A transdermal nutrient patch made specifically for women over 45 who want to take back control of their hunger, cravings, and metabolism—without relying on synthetic injections.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No pills to swallow</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No digestive issues</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="font-body text-foreground">No injections, ever</p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-body">
              Just clinically-supported nutrients, delivered straight into your bloodstream, using the same wartime medical principle that once saved soldiers' lives.
            </p>
          </section>

          {/* Ingredients Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The 4 Natural Nutrients That Help Stimulate GLP-1
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              Each Patched patch contains a precise blend of four science-backed ingredients shown to support natural GLP-1 activation:
            </p>

            <div className="grid gap-6 mb-8">
              {[{
              name: 'Berberine',
              description: 'Often called "Nature\'s Ozempic." Shown to reduce food intake by 47% in human trials.',
              icon: <Beaker className="w-6 h-6" />
            }, {
              name: 'Lemon Fruit Extract',
              description: 'Triggers GLP-1 release in just 30 minutes—helping you feel full faster and longer.',
              icon: <Clock className="w-6 h-6" />
            }, {
              name: 'Red Orange Complex',
              description: 'Targets stubborn belly fat. Shown to reduce waist circumference in clinical studies.',
              icon: <Shield className="w-6 h-6" />
            }, {
              name: 'Saffron Extract',
              description: 'Reduces emotional eating and sugar cravings by up to 70%.',
              icon: <CheckCircle className="w-6 h-6" />
            }].map((ingredient, index) => <div key={index} className="bg-gradient-to-r from-card to-accent/5 border border-border rounded-lg p-6 hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      {ingredient.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <h3 className="text-xl font-serifDisplay font-bold text-foreground">
                          {ingredient.name}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-serifBody leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-6">
              <p className="text-lg font-serifBody text-foreground">
                Together, they work to support your body's natural metabolic rhythm—the one your body used to follow before hormones, stress, and time got in the way.
              </p>
            </div>
          </section>

          {/* Transdermal Delivery Benefits */}
          <section className="mb-12">
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="/lovable-uploads/44568e39-635a-4642-b6f5-6429c8bb905f.png" alt="Scientific comparison diagram showing transdermal patch delivery versus pills and supplements, illustrating 8-hour sustained release through skin absorption versus short-term oral absorption with liver damage" className="w-full h-96 object-cover object-center" />
              <div className="p-4 bg-muted/20">
                <p className="text-sm text-muted-foreground font-serifBody italic text-center">
                  Why transdermal patches deliver superior results: 8+ hours of sustained absorption while bypassing digestive limitations.
                </p>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              Backed by Research. Proven by Women.
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              In a 6-month observational study conducted with 847 women using Patched daily, the results were impossible to ignore:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-primary mb-4">Appetite & Cravings</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">73% felt less hungry between meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">65% reported fewer sugar cravings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">81% said they felt satisfied after smaller meals</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-primary mb-4">Weight & Fat Loss</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">Average weight lost: 22.4 lbs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">3.9 inches off the waist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">3.8-point drop in BMI</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-primary mb-4">Energy & Metabolic Health</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">71% felt more energetic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">67% had better blood sugar control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-serifBody text-foreground">Nearly 50% reduced other medications</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Haven't You Heard Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              Why You Haven't Heard About Patched Yet
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">Let's be blunt: Drug companies bring in billions of dollars every year.</p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              They're loud. Flashy. Marketed like magic.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Patched isn't a drug. It's not synthetic. It's a natural solution rooted in history—and science.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              But because it's affordable, effective, and drug-free… there's no massive pharma budget behind it.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              That's why you're hearing about it now—through women, not TV ads.
            </p>
          </section>

          {/* Qualification Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              Could Patched Work for You?
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              If you answer "yes" to any of the following… it might be worth a closer look.
            </p>

            <div className="grid gap-4 mb-8">
              {["You're over 45 and struggling to manage your weight", "You're tired of cravings and emotional eating", "You've tried GLP-1 pills or injections with little success", "You want a natural, safe, proven alternative—without needles or side effects"].map((item, index) => <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="font-serifBody text-foreground">{item}</span>
                </div>)}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-6">
              <p className="text-lg font-serifBody text-foreground">
                Then Patched may be exactly what your body's been missing.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              Try Patched Risk-Free — Lose 30 Pounds in 90 Days or It's Free
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              If you've tried pills… injections… diets… and nothing has worked long-term, this is your invitation to try something completely different.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Patched uses a proven military medical method—transdermal delivery—to help you naturally activate GLP-1, control cravings, and finally feel in control of your weight again.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              And now, for a limited time, you can join our 30 Pounds in 90 Days Challenge—with zero risk.
            </p>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-serifDisplay font-bold text-foreground mb-6">Here's how it works:</h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <span className="font-serifBody text-foreground">Order Patched within the next 48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <span className="font-serifBody text-foreground">Use it exactly as directed for 90 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <span className="font-serifBody text-foreground">If you don't lose at least 30 pounds, you get a full refund—no questions asked</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              You'll be automatically enrolled in the challenge when you purchase today. No forms. No hoops. Just real results—or it's on us.
            </p>

            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
              <p className="text-xl font-serifBody font-bold text-primary mb-6">
                This is clinical-level metabolic support—without injections, without side effects, and without waste.
              </p>
              <p className="text-lg font-serifBody text-foreground mb-8">
                But this guarantee and enrollment window close in 48 hours.
              </p>
              <Button size="lg" className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                Try Patched Risk-Free Today →
              </Button>
            </div>
          </section>
        </article>
      </main>

      {/* Sticky CTA */}
      {showStickyCTA && <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border shadow-lg animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground font-serifDisplay">Try Patched Risk-Free</p>
              <p className="text-xs text-muted-foreground hidden sm:block">Lose 30 Pounds in 90 Days or It's Free</p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" className="whitespace-nowrap px-6 bg-primary hover:bg-primary/90 font-semibold animate-scale-in">
                Try Risk-Free →
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowStickyCTA(false)} className="h-8 w-8 p-0 hover:bg-muted">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        </div>}
    </div>;
};
export default PatchedAdvertorial;