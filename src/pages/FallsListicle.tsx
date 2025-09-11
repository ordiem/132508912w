import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StickyCTA from "@/components/StickyCTA";
const FallsListicle = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-serifDisplay">50&Beyond</div>
            <Badge variant="secondary">Advertorial</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="space-y-8">
          {/* Article Header */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs font-medium">WEIGHT LOSS
            </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-serifDisplay">
                5 Reasons Why You're Still Gaining Weight After 40 - Even If You're Doing Everything "Right"
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-serifBody">If the diet that worked at 35 suddenly stops working at 45, you're not alone. And it's not a willpower problem. The truth is, your body plays by a different set of rules as you age — and once you understand them, you can finally see results again.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground border-b border-border pb-6">
              
              
              <span>Sept. 8, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Lead Image */}
          <div className="w-full h-96 md:h-[28rem] rounded-lg overflow-hidden border-2 border-primary/20">
            <img 
              src="/lovable-uploads/34cdea4c-fbab-469e-8352-46ec715c90e7.png" 
              alt="Mature man with concerned expression surrounded by health-related icons including clock, molecular structure, scale, and brain, illustrating the complex factors affecting weight gain after 40"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              After age 40, your hormones change. This affects how your body processes food, stores fat, and feels full. 
              Here are 5 little-known reasons why stubborn pounds are even harder to lose after 50.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-l-primary">
              <p className="font-semibold text-lg mb-2">Find out what you can do today to turn your fat-burning switch back on.</p>
              <p className="text-base">And why it has nothing to do with discipline.</p>
            </div>
          </div>

          {/* Listicle Items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl font-bold text-primary">1</span>
                  <h2 className="text-2xl font-bold font-serifDisplay">Your Fullness Signal Has Gone Silent</h2>
                </div>
                <div className="h-72 md:h-80 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/c3f58640-cd92-4ec1-a2d0-62dd147626ed.png" alt="Man sitting at a dinner table with an empty plate, looking contemplative about not feeling satisfied after eating" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg leading-relaxed">
                  There's a hormone called GLP‑1 that tells your brain when to stop eating. It used to work with high effectiveness. 
                  But after 45, it drops off and meals stop feeling as satisfying.
                </p>
                <p className="text-lg leading-relaxed">
                  That's why you can eat a full plate and still feel hungry an hour later. You're not greedy. Your body's chemical "off switch" is weaker.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Action Step:</p>
                      <p className="text-muted-foreground">Add more protein, fiber, and real fat to meals. They help activate GLP‑1 naturally and keep you full longer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Item 2 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <h2 className="text-2xl font-bold font-serifDisplay">Muscle Is Disappearing in the Background</h2>
                </div>
                <div className="h-60 md:h-72 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/59f25e1d-761c-43a0-b644-2560c388ced5.png" alt="Man flexing his bicep showing muscle strength and definition" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg leading-relaxed">
                  You lose muscle every year after 50 whether you notice it or not. And muscle isn't just for looks. It burns calories around the clock.
                </p>
                <p className="text-lg leading-relaxed">
                  So with less muscle, your metabolism slows. You're burning fewer calories doing the exact same things you've always done.
                </p>
                <p className="text-lg leading-relaxed">
                  The kicker? Most diets make this worse by causing muscle loss on top of fat.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Action Step:</p>
                      <p className="text-muted-foreground">Lift weights. Eat enough protein. Muscle is your metabolism's best friend.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Item 3 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <h2 className="text-2xl font-bold font-serifDisplay">Stress Is Forcing Fat Onto Your Belly</h2>
                </div>
                <div className="h-60 md:h-72 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/e941b83f-4c89-478a-a2c5-93518d84ba6a.png" alt="Stressed man holding his head with storm clouds and lightning in background, representing cortisol-driven stress" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg leading-relaxed">
                  After 50, stress hits harder and your body gets worse at handling it. That means cortisol, your main stress hormone, stays elevated longer.
                </p>
                <p className="text-lg leading-relaxed">
                  High cortisol tells your body to store fat, especially around your middle. It also drives cravings for sugar, salt, and comfort food, whether you're actually hungry or not.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Action Step:</p>
                      <p className="text-muted-foreground">Managing stress isn't a luxury. It's a weight-loss tool. Walk, breathe, lift, sleep on a daily basis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Item 4 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl font-bold text-primary">4</span>
                  <h2 className="text-2xl font-bold font-serifDisplay">Sleep Wrecks Your Hunger Hormones</h2>
                </div>
                <div className="h-60 md:h-72 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/41eb540d-a8b7-4a5a-a57d-47b35b825ee4.png" alt="Tired man sitting at table with head in hand, clock showing sleep symbols (ZZZ), representing sleep disruption and exhaustion" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-lg leading-relaxed">
                  Sleep gets lighter and more broken after 50. Blame hormones, night sweats, bathroom trips, or just an overactive mind.
                </p>
                <p className="text-lg leading-relaxed">
                  Poor sleep doesn't just make you tired; it changes your appetite. It increases ghrelin, which makes you feel hungry. At the same time, it lowers leptin, the hormone that makes you feel full. As a result, you eat more and crave unhealthy foods, even if you aim to eat healthy.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Action Step:</p>
                      <p className="text-muted-foreground">Focus on sleep like a workout. Dark room. Cool temperature. No screens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Item 5 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl font-bold text-primary">5</span>
                  <h2 className="text-2xl font-bold font-serifDisplay">Your Body Doesn't Handle Sugar Like It Used To</h2>
                </div>
                
                <div className="h-60 md:h-72 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/42a5913f-1be4-41a0-acbb-891e456790ce.png" alt="Man looking contemplatively at a piece of cake with rising chart in background, representing blood sugar spikes and insulin resistance" className="w-full h-full object-cover object-center" />
                </div>
                
                <p className="text-lg leading-relaxed">
                  Your cells become less sensitive to insulin as you age. So carbs that used to fuel you now spike your blood sugar then crash it.
                </p>
                <p className="text-lg leading-relaxed">
                  You feel wired… then drained. And when that crash hits? Your body screams for fast sugar. That's the roller coaster that keeps weight loss out of reach.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Action Step:</p>
                      <p className="text-muted-foreground">Don't fear carbs; balance them. Pair every carb with protein or fat to keep blood sugar steady.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Redesigned CTA Section */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/30 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="relative p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    ⚡ Free 30-Second Assessment
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serifDisplay">
                    Ready to Turn Your Fat-Burning Switch Back On?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover which hormones are sabotaging your weight loss and get a personalized action plan to fix them.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Science-backed results
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Personalized recommendations
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Takes just 30 seconds
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full md:w-auto px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    Take the Free Quiz Now →
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Join 50,000+ people who've discovered their hormone solution
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 The Health Times. Educational content for informational purposes.</p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <StickyCTA />
    </div>;
};
export default FallsListicle;