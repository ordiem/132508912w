const BlogPost = () => {
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                Health
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border">
                Medical
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Updated July 15, 2025
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serifDisplay font-bold leading-tight text-foreground">Pharmacist Reveals $39.99 Alternative to Costly GLP-1 Medications</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Millions are paying over $1,000 a month for GLP-1 injections to curb cravings and lose weight. But one pharmacist says a $39.99 alternative can deliver similar appetite-controlling benefits without prescriptions.</p>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-3 py-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">RP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Robert Phillips</p>
              <p className="text-xs text-muted-foreground">Former Community Pharmacist</p>
            </div>
          </div>

          <hr className="border-border" />

          {/* Hero Image */}
          <figure className="w-full rounded-lg border border-border overflow-hidden shadow-sm bg-card">
            <img src="/lovable-uploads/7ef499b0-dfd7-4a39-9301-b661c57589f2.png" alt="Hero image: GLP-1 alternative breakthrough — pharmacist with natural solution comparison" className="w-full h-80 object-cover" loading="eager" decoding="async" />
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
              <img src="/lovable-uploads/b6f06d4a-6b59-431f-a23c-1e142073677c.png" alt="Pharmacy consultation scene — pharmacist helping customer" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
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

            <h2 className="text-2xl md:text-3xl font-serifDisplay font-semibold text-foreground mt-10 mb-6">What I Was Looking For</h2>
            
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
                <p className="text-muted-foreground leading-relaxed">Helps lower blood sugar levels and improves how your body processes sugar.
Reduces bad cholesterol and supports healthy heart function.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Lemon Fruit Extract (Eriomin)</h4>
                <p className="text-muted-foreground leading-relaxed">Naturally boosts your body's ability to control blood sugar after meals.
Helps your body produce more of the hormone that makes you feel full.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Red Orange Extract</h4>
                <p className="text-muted-foreground leading-relaxed">Helps you lose weight and reduces belly fat over time.
Makes your waist smaller and improves overall body shape.</p>
              </div>
              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Saffron Extract</h4>
                <p className="text-muted-foreground leading-relaxed">Reduces feelings of hunger and helps control food cravings.
Makes you feel more satisfied with less food and supports weight loss.</p>
              </div>
            </div>

            <p className="text-lg font-medium text-foreground">
              But there was still one big obstacle: absorption.
            </p>

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

            {/* Scientific research illustration & absorption comparison */}
            <figure className="w-full rounded-lg border border-border overflow-hidden my-8 shadow-lg bg-card">
              <img src="/lovable-uploads/f00da2e4-d1f5-4266-82c9-c53c93aabb9a.png" alt="Scientific research illustration — natural ingredients and absorption comparison" className="w-full h-80 md:h-96 lg:h-[28rem] object-contain bg-white/50" loading="lazy" decoding="async" />
            </figure>

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
                    <td className="p-4 font-semibold text-primary">Easy daily patch application</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm text-center mt-10">
              <h3 className="text-xl md:text-2xl font-serifDisplay font-semibold text-foreground mb-4">
                Ready to Try This Alternative?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands who have discovered this affordable GLP-1 alternative. See if it's right for you with our 90-day money-back guarantee.
              </p>
              <div className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors">
                Check Availability Today
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2025 Health Journal — All rights reserved
      </footer>
    </div>
  );
};

export default BlogPost;