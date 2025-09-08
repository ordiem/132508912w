import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Beaker, X } from 'lucide-react';

const PatchedAdvertorial = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / height) * 100;
      setShowStickyCTA(scrollPercent > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-serifDisplay font-bold text-primary">PATCHED</h1>
            <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded uppercase tracking-wider font-medium">
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
            <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
              HEALTH • WOMEN'S WELLNESS • BREAKTHROUGH RESEARCH
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serifDisplay font-bold leading-tight mb-6 text-foreground">
              Why Millions of Women Over 45 Are Wasting $200 a Month on Vitamins That Don't Work
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-serifBody mb-8 leading-relaxed">
              And the 80-Year-Old Military Secret That Delivers 100% of Nutrients Into Your Bloodstream
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-primary/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-lg font-serifBody leading-relaxed text-foreground">
                A forgotten technique from World War II is helping women shed stubborn weight, cut cravings, and feel 20 years younger—without swallowing a single pill
              </p>
            </div>
          </div>

          {/* Opening Hook */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="drop-cap text-lg leading-relaxed text-foreground font-serifBody">
              If you're a woman over 45 who takes vitamins or supplements—and you're not seeing results—this may be the most important article you'll read this year.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Let me explain why.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Some time ago, Dr. Sarah Chen, a metabolic researcher at Stanford Medical Center, noticed something strange in her lab.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Her patients were spending hundreds—sometimes thousands—of dollars on nutritional supplements. But their blood work didn't budge.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              They were still deficient.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Still tired.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Still gaining weight.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              One woman, age 52, was taking $200 worth of high-end supplements every month. Yet when her blood tests came back?
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody font-semibold">
              She was deficient in nearly every nutrient she was supposedly "supplementing."
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              Dr. Chen knew something wasn't adding up.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              So she went deeper.
            </p>
          </div>

          {/* Problem Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The 80% Problem No One Talks About
            </h2>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-serifDisplay font-bold text-destructive mb-4">
                Here's what she uncovered:
              </h3>
              <p className="text-2xl font-serifBody font-bold text-destructive leading-relaxed">
                Most women over 45 are only absorbing 20% of the nutrients in the pills they swallow.
              </p>
              <p className="text-lg text-muted-foreground mt-4 font-serifBody">
                Let that sink in.
              </p>
              <p className="text-xl font-serifBody font-semibold text-destructive mt-2">
                80 cents of every dollar you spend on vitamins? Gone.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Not because you're doing anything wrong—but because your body has changed.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              According to Dr. Chen, it's due to a two-step digestive trap:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="font-serifDisplay font-bold text-lg">Stomach Acid Destruction</h4>
                </div>
                <p className="text-muted-foreground font-serifBody">
                  Stomach acid destroys up to 60% of nutrients before they even leave your gut.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                  <h4 className="font-serifDisplay font-bold text-lg">Liver Filtration</h4>
                </div>
                <p className="text-muted-foreground font-serifBody">
                  Your liver filters out another 40% in what scientists call "first-pass metabolism."
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Add in slower digestion (especially if you're on medications like Ozempic), and that number drops even further.
            </p>

            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-xl font-serifBody italic text-foreground leading-relaxed">
                "We're asking women to spend hundreds on supplements that don't work. It's not just ineffective—it's unethical."
              </p>
              <cite className="text-muted-foreground font-serifBody mt-2 block">— Dr. Chen</cite>
            </blockquote>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              So what's the solution?
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              To find it, Dr. Chen went somewhere few modern doctors would dare venture.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody font-semibold">
              She opened a forgotten drawer of history: World War II military medicine.
            </p>
          </section>

          {/* Historical Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The Medical Breakthrough the Army Used in 1943
            </h2>

            <div className="bg-gradient-to-r from-muted/30 to-accent/10 border border-muted rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                In 1943, military medics on the front lines faced a deadly dilemma.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                Wounded soldiers couldn't swallow pills. Their stomachs were too damaged. Their digestion, unreliable.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                Yet they still needed life-saving medications.
              </p>

              <p className="text-xl font-serifBody font-bold text-primary mb-6">
                So the army pioneered something extraordinary: Transdermal delivery.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody">
                Instead of going through the stomach, they placed medication on the skin—where it absorbed directly into the bloodstream.
              </p>
            </div>

            <p className="text-xl font-serifBody font-semibold text-primary mb-6">
              And it worked.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              Injured soldiers who couldn't even hold down water suddenly got relief. Their pain eased. Their vitals stabilized.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="text-xl font-serifDisplay font-bold text-foreground mb-4">
                It was a breakthrough so effective that hospitals still use it today for:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Hormone replacement therapy',
                  'Nicotine cessation',
                  'Motion sickness',
                  'Pain relief (fentanyl patches)',
                  'Heart medications (like nitroglycerin)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-serifBody text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Dr. Chen had a thought: What if this proven medical technique could work for nutrients too?
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody">
              And more importantly…
            </p>

            <p className="text-xl font-serifBody font-bold text-primary">
              What if it could help women over 45 finally lose weight, control cravings, and feel energized again—without swallowing a single pill?
            </p>
          </section>

          {/* Science Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The Four "GLP-1 Activators" That Could Change Everything
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              Dr. Chen's team identified four compounds with an extraordinary effect on GLP-1, the hormone that controls appetite, metabolism, and weight gain.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              Here's what the clinical research says:
            </p>

            <div className="grid gap-6 mb-8">
              {[
                {
                  name: 'Berberine',
                  subtitle: 'Nature\'s Ozempic',
                  description: 'Reduces food intake by 47.5% in clinical studies. It mimics the effects of prescription weight loss drugs—without the side effects.',
                  icon: <Beaker className="w-6 h-6" />
                },
                {
                  name: 'Lemon Fruit Extract',
                  subtitle: 'Fast-Acting Appetite Control',
                  description: 'Increases GLP-1 levels in just 30 minutes, triggering satiety and natural appetite control for up to 8 hours.',
                  icon: <Clock className="w-6 h-6" />
                },
                {
                  name: 'Red Orange Complex',
                  subtitle: 'Belly Fat Targeting',
                  description: 'Targets belly fat at the cellular level. In double-blind trials, women lost 15% more weight than the control group.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  name: 'Saffron Extract',
                  subtitle: 'The Craving Killer',
                  description: 'Clinical trials show a 70% drop in appetite, a 69% decrease in hunger, and 65% fewer sugar cravings.',
                  icon: <CheckCircle className="w-6 h-6" />
                }
              ].map((ingredient, index) => (
                <div key={index} className="bg-gradient-to-r from-card to-accent/5 border border-border rounded-lg p-6 hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      {ingredient.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serifDisplay font-bold text-foreground mb-2">
                        {ingredient.name}
                      </h3>
                      <p className="text-accent font-serifBody font-semibold mb-3">
                        {ingredient.subtitle}
                      </p>
                      <p className="text-muted-foreground font-serifBody leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <p className="text-lg font-serifBody text-foreground mb-4">
                All four ingredients were proven in labs.
              </p>
              <p className="text-xl font-serifBody font-bold text-destructive">
                The problem?
              </p>
              <p className="text-xl font-serifBody font-bold text-destructive">
                None of them work if they don't reach your bloodstream.
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The Patch That Changed Everything
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              That's when Dr. Chen had her second breakthrough.
            </p>

            <p className="text-xl font-serifBody font-semibold text-primary mb-8">
              What if you could combine all four compounds into a medical-grade patch—delivering a steady, 8-hour supply directly into the bloodstream, bypassing the digestive system entirely?
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              That's exactly what she did.
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
              <p className="text-xl font-serifBody font-bold text-primary mb-6">
                The result is a product called Patched.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                You simply place the patch on your skin each morning. It gets to work silently, steadily—no pills, no nausea, no sugar crashes.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                And most importantly?
              </p>

              <p className="text-2xl font-serifBody font-bold text-accent">
                100% absorption.
              </p>
            </div>

            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-xl font-serifBody italic text-foreground leading-relaxed">
                "We already know patches work. They've helped millions stop smoking. Now we're using the same delivery method to help women naturally regulate appetite, cravings, and energy."
              </p>
              <cite className="text-muted-foreground font-serifBody mt-2 block">— Dr. Chen</cite>
            </blockquote>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              847 Women. One Breakthrough. Remarkable Results.
            </h2>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              In a 6-month observational study of 847 women using the GLP-1 support patch, the results stunned the Stanford team.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-accent mb-4">Appetite Control:</h3>
                <ul className="space-y-2 font-serifBody text-foreground">
                  <li>• 73% reduction in between-meal hunger</li>
                  <li>• 65% drop in sugar cravings</li>
                  <li>• 55% less late-night snacking</li>
                  <li>• 81% felt full after normal-sized meals</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-primary mb-4">Weight Loss:</h3>
                <ul className="space-y-2 font-serifBody text-foreground">
                  <li>• Average: 22.4 pounds lost</li>
                  <li>• 3.9 inches off the waist</li>
                  <li>• 3.4 inches off the hips</li>
                  <li>• 3.8-point drop in BMI</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-muted/20 to-accent/10 border border-muted rounded-lg p-6">
                <h3 className="text-xl font-serifDisplay font-bold text-foreground mb-4">Energy & Health:</h3>
                <ul className="space-y-2 font-serifBody text-foreground">
                  <li>• 67% saw better blood sugar levels</li>
                  <li>• 54% had improved blood pressure</li>
                  <li>• 71% reported higher energy</li>
                  <li>• Nearly half reduced other medications*</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">*with doctor approval</p>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              One Woman's Story: "It Gave Me My Life Back"
            </h2>

            <div className="bg-gradient-to-r from-card to-muted/10 border border-border rounded-lg p-8">
              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                Sarah Thompson, 52, from Denver, had tried everything.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                She was taking Ozempic but developed gastroparesis—a condition that made digestion painfully slow. She couldn't hold down vitamins, let alone meals.
              </p>

              <blockquote className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-xl font-serifBody italic text-foreground leading-relaxed">
                  "I was literally flushing $200 of supplements down the toilet every month."
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                Then she discovered Patched.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                In just 5 months, she lost 47 pounds, had more energy than she had in a decade, and—most importantly—her blood work came back perfect.
              </p>

              <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-xl font-serifBody italic text-foreground leading-relaxed">
                  "It was the only thing that worked. And I never swallowed a single pill."
                </p>
              </blockquote>
            </div>
          </section>

          {/* Why Your Doctor Hasn't Told You */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              Why Your Doctor Hasn't Told You
            </h2>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 mb-8">
              <p className="text-xl font-serifBody font-bold text-destructive mb-6">
                Here's the uncomfortable truth:
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                There's no profit for Big Pharma in a $40 patch.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                GLP-1 injectables like Ozempic and Wegovy bring in billions—at $1,200+ a month.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
                Hospitals use patches. The military perfected the method 80 years ago. Yet the mainstream health industry? Silent.
              </p>

              <p className="text-xl font-serifBody font-bold text-destructive">
                Why?
              </p>

              <p className="text-xl font-serifBody font-bold text-destructive">
                Because transdermal nutrient delivery is too effective—and too affordable.
              </p>
            </div>
          </section>

          {/* Call to Action Questions */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              If You're Over 45, Ask Yourself:
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Are you spending money on vitamins you don\'t feel?',
                'Are cravings, hunger, and low energy still running your day?',
                'Have GLP-1 medications made swallowing supplements impossible?',
                'Are you tired of losing the same 10 pounds again and again?'
              ].map((question, index) => (
                <div key={index} className="bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-lg p-4">
                  <p className="font-serifBody text-foreground">{question}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-lg font-serifBody text-foreground mb-4">
                If you answered yes, this isn't just another "weight loss" gimmick.
              </p>
              <p className="text-xl font-serifBody font-bold text-primary mb-4">
                It's a breakthrough in how nutrients enter your body.
              </p>
              <p className="text-lg font-serifBody text-foreground">
                And it may finally give you the results you deserve.
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6 text-center">
              Try It Risk-Free
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: '1-Month Supply',
                  price: '$39.99',
                  originalPrice: '$79.99',
                  savings: null
                },
                {
                  title: '3-Month Supply',
                  price: '$104.97',
                  originalPrice: null,
                  savings: 'save $135'
                },
                {
                  title: '6-Month Supply',
                  price: '$149.94',
                  originalPrice: null,
                  savings: 'save $330'
                }
              ].map((option, index) => (
                <div key={index} className={`bg-gradient-to-br ${index === 1 ? 'from-accent/20 to-primary/10 border-accent' : 'from-card to-muted/5 border-border'} border-2 rounded-lg p-6 text-center`}>
                  <h3 className="text-xl font-serifDisplay font-bold text-foreground mb-4">
                    {option.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-serifDisplay font-bold text-primary">
                      {option.price}
                    </span>
                    {option.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through ml-2">
                        {option.originalPrice}
                      </span>
                    )}
                  </div>
                  {option.savings && (
                    <p className="text-accent font-serifBody font-semibold mb-4">
                      {option.savings}
                    </p>
                  )}
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Order Now
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-muted/20 border border-muted rounded-lg p-6 text-center">
              <p className="text-lg font-serifBody text-foreground mb-2">
                Each order comes with free shipping and a 30-day, no-questions-asked money-back guarantee.
              </p>
              <p className="text-muted-foreground font-serifBody">
                Use the patches for a month. If you don't feel the difference, send back the empty wrappers for a full refund.
              </p>
            </div>
          </section>

          {/* Final Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serifDisplay font-bold text-foreground mb-6">
              The Final Word
            </h2>

            <blockquote className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-xl font-serifBody italic text-foreground leading-relaxed">
                "The consumer is not a moron, she is your wife."
              </p>
              <cite className="text-muted-foreground font-serifBody mt-2 block">— David Ogilvy</cite>
            </blockquote>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              You're smart enough to know when you're being sold snake oil—and when you're being offered something real.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-6">
              Transdermal delivery isn't theory. It's proven medical science. Hospitals use it. Soldiers survived on it. And now, it can help you thrive.
            </p>

            <p className="text-lg leading-relaxed text-foreground font-serifBody mb-8">
              You've spent years paying for pills that barely absorb. Isn't it time to try a method that delivers 100% of what you're paying for?
            </p>

            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
              <p className="text-xl font-serifBody font-bold text-primary mb-6">
                Try Patched today. Let science—and history—finally work in your favor.
              </p>
              <Button size="lg" className="px-8 py-4 text-lg">
                Check Availability Now
              </Button>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-serifBody">
            © 2024 Patched. All rights reserved.
          </p>
        </div>
      </footer>

      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border shadow-lg animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground font-serifDisplay">
                Ready to Try the Military's 80-Year-Old Nutrient Secret?
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                100% absorption guaranteed - No pills required
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                size="sm"
                className="whitespace-nowrap px-6 bg-primary hover:bg-primary/90 font-semibold animate-scale-in"
              >
                Check Availability →
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowStickyCTA(false)}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatchedAdvertorial;