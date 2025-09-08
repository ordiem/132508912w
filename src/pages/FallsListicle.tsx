import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FallsListicle = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">The Health Times</div>
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
              <Badge variant="outline" className="text-xs font-medium">HEALTH CRISIS</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                7 Hidden Medication Risks That Are Causing Deadly Falls in Older Adults
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fall deaths among seniors have surged 70% in two decades. Many don't realize their prescriptions are partly to blame.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground border-b border-border pb-6">
              <span>By Health Desk</span>
              <span>•</span>
              <span>Sept. 8, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Lead Image Placeholder */}
          <div className="w-full h-64 md:h-80 bg-muted rounded-lg flex items-center justify-center border">
            <p className="text-muted-foreground">Elderly person with pill organizer, looking concerned</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Martha Richardson, 78, was taking her morning medications when she felt dizzy and collapsed in her kitchen. 
              The fall fractured her hip and led to complications that kept her hospitalized for weeks. What she didn't know 
              was that the combination of her blood pressure medication and sleeping pill had created a perfect storm for falls.
            </p>
            <p className="text-lg leading-relaxed">
              Martha's story is increasingly common. CDC data shows fall deaths among adults 65 and older have risen more than 
              70% since 2003. While age-related factors play a role, medications are an overlooked culprit behind this deadly trend.
            </p>
          </div>

          {/* Listicle Items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">1</span>
                  <h2 className="text-2xl font-bold">Blood Pressure Medications Can Drop You Fast</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Person checking blood pressure with medication bottles nearby</p>
                </div>
                <p className="text-lg leading-relaxed">
                  ACE inhibitors and diuretics—common blood pressure drugs—can cause sudden drops in blood pressure when 
                  standing up. This orthostatic hypotension affects up to 30% of seniors and doubles fall risk.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">What to watch for:</p>
                  <p>Dizziness when standing, lightheadedness, or feeling faint after getting up from sitting or lying down.</p>
                </div>
              </div>
            </Card>

            {/* Item 2 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <h2 className="text-2xl font-bold">Sleep Aids Turn into Daytime Dangers</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Split image: peaceful sleep vs. groggy morning routine</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Sleeping pills like Ambien and Lunesta can remain in your system for 8-12 hours, causing morning grogginess 
                  and impaired balance. Studies show seniors taking sleep aids have a 44% higher fall risk the next day.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Safer alternatives:</p>
                  <p>Melatonin (lower doses), sleep hygiene improvements, or shorter-acting medications prescribed by your doctor.</p>
                </div>
              </div>
            </Card>

            {/* Item 3 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <h2 className="text-2xl font-bold">Anti-Anxiety Drugs Create a False Sense of Security</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Person walking confidently but unsteadily</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Benzodiazepines like Xanax and Ativan reduce anxiety but also reduce your awareness of balance problems. 
                  You feel calm and confident, but your reaction time and coordination are compromised.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">The hidden risk:</p>
                  <p>These medications can stay active for 24-48 hours in older adults, much longer than in younger people.</p>
                </div>
              </div>
            </Card>

            {/* Item 4 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">4</span>
                  <h2 className="text-2xl font-bold">Muscle Relaxants That Relax You Too Much</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Comparison of stable vs. unstable muscle control</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Medications like Flexeril and Soma don't just relax painful muscles—they can make all your muscles less 
                  responsive. This includes the small stabilizing muscles that keep you upright and balanced.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Timing matters:</p>
                  <p>Never take muscle relaxants before walking, especially at night or when navigating stairs.</p>
                </div>
              </div>
            </Card>

            {/* Item 5 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">5</span>
                  <h2 className="text-2xl font-bold">Antidepressants Affect More Than Mood</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Brain diagram showing balance/coordination centers</p>
                </div>
                <p className="text-lg leading-relaxed">
                  SSRIs and tricyclic antidepressants can cause dizziness, blurred vision, and something called "brain fog" 
                  that affects spatial awareness. About 25% of seniors on these medications report balance issues.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Important note:</p>
                  <p>Never stop antidepressants suddenly. Work with your doctor to adjust dosing or timing if falls are a concern.</p>
                </div>
              </div>
            </Card>

            {/* Item 6 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">6</span>
                  <h2 className="text-2xl font-bold">Diabetes Drugs Can Drop Blood Sugar and Balance</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Blood glucose meter with warning indicators</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Insulin and sulfonylureas can cause hypoglycemia (low blood sugar), leading to shakiness, confusion, 
                  and weakness. When blood sugar drops below 70 mg/dL, fall risk increases dramatically.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Prevention strategy:</p>
                  <p>Regular blood sugar monitoring, consistent meal timing, and keeping glucose tablets handy.</p>
                </div>
              </div>
            </Card>

            {/* Item 7 */}
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">7</span>
                  <h2 className="text-2xl font-bold">The Deadly Cocktail: Multiple Medications</h2>
                </div>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Multiple pill bottles with interaction warning symbols</p>
                </div>
                <p className="text-lg leading-relaxed">
                  Taking 4 or more medications increases fall risk by 60%. Drug interactions can amplify side effects in 
                  unpredictable ways. Even "safe" combinations can become dangerous when metabolism slows with age.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Action step:</p>
                  <p>Schedule an annual medication review with your pharmacist to identify potential interactions and unnecessary drugs.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Conclusion */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">What You Can Do Today</h2>
              <div className="space-y-3">
                <p className="text-lg">• Ask your doctor about fall-risk medications during every visit</p>
                <p className="text-lg">• Request the lowest effective doses for your conditions</p>
                <p className="text-lg">• Keep a medication list updated with timing and side effects</p>
                <p className="text-lg">• Consider a home safety assessment to reduce environmental fall risks</p>
                <p className="text-lg">• Stay physically active to maintain strength and balance</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4 py-8">
            <h3 className="text-xl font-semibold">Concerned About Your Medications?</h3>
            <p className="text-muted-foreground">Talk to your healthcare provider about conducting a fall-risk medication review.</p>
            <Button size="lg" className="px-8">
              Find Healthcare Providers
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
    </div>
  );
};

export default FallsListicle;