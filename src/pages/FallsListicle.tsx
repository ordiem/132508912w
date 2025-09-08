import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const FallsListicle = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">50&Beyond</div>
            <Badge variant="secondary">Health</Badge>
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                5 Reasons Why You're Still Gaining Weight After 40 - Even If You're Doing Everything "Right"
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">If the diet that worked at 35 suddenly stops working at 45, you're not alone. And it's not a willpower problem. The truth is, your body plays by a different set of rules as you age — and once you understand them, you can finally see results again.</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground border-b border-border pb-6">
              <span>By Sara Kennel</span>
              <span>•</span>
              <span>Sept. 8, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Lead Image Placeholder */}
          <div className="w-full h-64 md:h-80 bg-muted rounded-lg flex items-center justify-center border">
            <p className="text-muted-foreground">Split-screen comparison showing the same woman at 35 vs 50, both frustrated while looking at a scale</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
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
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">1</span>
                  <h2 className="text-2xl font-bold">Your Fullness Signal Has Gone Silent</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Close-up of a woman in her 50s sitting at a dinner table, looking at an empty plate with a confused expression, hand on stomach</p>
                </div>
                <p className="text-lg leading-relaxed">
                  There's a hormone called GLP‑1 that tells your brain when to stop eating. It used to work with high effectiveness. 
                  But after 45, it drops off and meals stop feeling as satisfying.
                </p>
                <p className="text-lg leading-relaxed">
                  That's why you can eat a full plate and still feel hungry an hour later. You're not greedy. Your body's chemical "off switch" is weaker.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Fix it:</p>
                  <p>Add more protein, fiber, and real fat to meals. They help activate GLP‑1 naturally and keep you full longer.</p>
                </div>
              </div>
            </Card>

            {/* Item 2 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <h2 className="text-2xl font-bold">Muscle Is Disappearing in the Background</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Side-by-side illustration showing muscle tissue comparison - vibrant, dense muscle fibers on the left labeled '30s' versus thinner, less dense muscle fibers on the right labeled '50s'</p>
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
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Fix it:</p>
                  <p>Lift weights. Eat enough protein. Muscle is your metabolism's best friend.</p>
                </div>
              </div>
            </Card>

            {/* Item 3 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <h2 className="text-2xl font-bold">Stress Is Forcing Fat Onto Your Belly</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">A mature woman juggling multiple responsibilities (work laptop, family photos, bills) with a subtle red glow around her midsection representing cortisol-driven belly fat storage</p>
                </div>
                <p className="text-lg leading-relaxed">
                  After 50, stress hits harder and your body gets worse at handling it. That means cortisol, your main stress hormone, stays elevated longer.
                </p>
                <p className="text-lg leading-relaxed">
                  High cortisol tells your body to store fat, especially around your middle. It also drives cravings for sugar, salt, and comfort food, whether you're actually hungry or not.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Fix it:</p>
                  <p>Managing stress isn't a luxury. It's a weight-loss tool. Walk, breathe, lift, sleep on a daily basis.</p>
                </div>
              </div>
            </Card>

            {/* Item 4 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">4</span>
                  <h2 className="text-2xl font-bold">Sleep Wrecks Your Hunger Hormones</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">A woman lying in bed at night, eyes slightly open. The room should be dimly lit with perhaps a digital clock showing 2:47 AM. Include subtle visual cues of restless sleep like rumpled sheets</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Sleep gets lighter and more broken after 50. Blame hormones, night sweats, bathroom trips, or just an overactive mind.
                </p>
                <p className="text-lg leading-relaxed">
                  Poor sleep doesn't just make you tired; it changes your appetite. It increases ghrelin, which makes you feel hungry. At the same time, it lowers leptin, the hormone that makes you feel full. As a result, you eat more and crave unhealthy foods, even if you aim to eat healthy.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Fix it:</p>
                  <p>Focus on sleep like a workout. Dark room. Cool temperature. No screens.</p>
                </div>
              </div>
            </Card>

            {/* Item 5 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">5</span>
                  <h2 className="text-2xl font-bold">Your Body Doesn't Handle Sugar Like It Used To</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">An abstract visualization of a blood sugar roller coaster. Graph throughout the day. Line comparison by age</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Your cells become less sensitive to insulin as you age. So carbs that used to fuel you now spike your blood sugar then crash it.
                </p>
                <p className="text-lg leading-relaxed">
                  You feel wired… then drained. And when that crash hits? Your body screams for fast sugar. That's the roller coaster that keeps weight loss out of reach.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Fix it:</p>
                  <p>Don't fear carbs; balance them. Pair every carb with protein or fat to keep blood sugar steady.</p>
                </div>
              </div>
            </Card>

          </div>

          {/* Conclusion */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Turn the Switch Back On: Discover how your hormones might be holding you back.</h2>
              <p className="text-lg leading-relaxed">
                The good news? Pinpointing which hormones need the most support is quick and eye-opening.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Take the 30‑Second Quiz</h3>
                <p className="text-lg">Answer a handful of simple lifestyle and symptom questions.</p>
                <p className="text-lg">Take this quick 30-second quiz. Discover how your hormones might be holding you back. Find out what steps you can take to restart natural weight loss.</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4 py-8">
            <Button size="lg" className="px-8 text-lg py-6">
              Start the 30-Second Quiz Now
            </Button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 The Health Times. Educational content for informational purposes.</p>
        </div>
      </footer>
    </div>;
};
export default FallsListicle;