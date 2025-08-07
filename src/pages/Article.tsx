import { useEffect, useMemo } from "react";
import heroImage from "@/assets/hero-wsj.jpg";
import { Button } from "@/components/ui/button";

export default function Article() {
  const h1 = '5 Reasons a Simple Daily Patch is the "8-Hour Appetite Switch" Women Over 45 are Raving About';
  const seoTitle = "5 Reasons the 8‑Hour Appetite Switch Patch Works"; // <60 chars
  const description =
    "Metabolism after 45 isn’t about willpower. Discover the daily patch that calms food noise and supports a steady 8‑hour appetite switch.";
  const canonical = `${window.location.origin}/article`;

  useEffect(() => {
    document.title = `${seoTitle} — Journal`;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [seoTitle, description, canonical]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: h1,
      name: seoTitle,
      description,
      image: [new URL(heroImage, window.location.origin).toString()],
      articleSection: "Health & Wellness",
      author: { "@type": "Person", name: "Editorial Desk" },
      publisher: { "@type": "Organization", name: "Journal" },
      datePublished: "2025-08-07",
      dateModified: "2025-08-07",
      mainEntityOfPage: canonical,
    }),
    [h1, seoTitle, description, canonical]
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a href="/" className="story-link">Home</a>
            <span className="mx-2">/</span>
            <span>Health</span>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-10">
        {/* Intro block - centered like the gallery layout */}
        <article className="mx-auto max-w-3xl text-center animate-fade-in">
          <p className="uppercase tracking-[0.12em] text-xs text-muted-foreground">Health & Wellness</p>
          <h1 className="font-serifDisplay text-4xl sm:text-5xl md:text-6xl leading-tight mt-3">{h1}</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            If you feel like your metabolism has betrayed you and food cravings are running your life, you’re not just imagining it. Here’s the science-backed reason why—and the simple daily ritual that’s changing everything.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="h-12 w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">ED</div>
            <div>
              <span className="text-foreground">Editorial Desk</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-08-07">Aug 7, 2025</time>
            </div>
          </div>
        </article>

        {/* Lead image */}
        <figure className="mt-10 overflow-hidden rounded-lg border">
          <img
            src={heroImage}
            alt="Abstract editorial hero representing calm appetite and steady energy"
            loading="eager"
            className="w-full h-auto"
          />
        </figure>

        {/* Body copy */}
        <article className="mx-auto max-w-3xl mt-10 text-[1.07rem] leading-relaxed">
          <p>
            For years, you’ve been told the same story: eat less, move more. But if you’re a woman over 45, you know it’s not that simple. You can eat salads until you’re blue in the face, but the scale remains stuck and the cravings for sugar and carbs feel like a constant, nagging battle.
          </p>
          <p>
            But what if that battle wasn’t about willpower?
          </p>
          <p>
            A growing body of research, championed by nutritional doctors like Dr. Sarah Mitchell, ND, reveals that the root cause isn’t a lack of discipline—it’s a biological switch that gets turned off. Fortunately, a revolutionary new approach is helping thousands of women flip that switch back on, silencing food cravings and reactivating their metabolism for 8 hours straight.
          </p>
          <p>
            Here are 5 reasons why this simple “8‑Hour Appetite Switch” patch is becoming the go‑to solution for women who thought they’d tried everything.
          </p>

          <section className="mt-10">
            <h2 className="font-serifDisplay text-2xl mb-3">1. It Tackles the REAL Reason You’re Craving Food After 45</h2>
            <p>
              You’re not imagining it: your body changed after 45. The real culprit is a hormone called GLP‑1, your body’s “master appetite hormone.” It tells your brain when you’re full, slows down digestion to make you feel satisfied longer, and helps stabilize blood sugar.
            </p>
            <p>
              <strong>The Problem:</strong> Research shows that after age 45, your natural GLP‑1 production can plummet by as much as 32%. When this happens, the “off switch” for your hunger is broken. Your brain rarely gets the signal that you’re full, leading to constant “food noise” and relentless cravings that no amount of willpower can defeat.
            </p>
            <p>
              <strong>The “Switch” Solution:</strong> The patch delivers a steady, 8‑hour supply of natural, clinically‑studied ingredients like Lemon Fruit Extract, which has been shown in human trials to boost the body’s own GLP‑1 production by up to 22%. It works by fixing the root problem—restoring the hormonal signal that tells your body you’re satisfied.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serifDisplay text-2xl mb-3">2. It Bypasses the “Digestive Death Trap” That Makes Pills Useless</h2>
            <p>
              Have you ever spent a fortune on supplements, only to feel like they did absolutely nothing? You were probably right.
            </p>
            <p>
              <strong>The Problem:</strong> Your stomach is an acid bath designed to break things down. Experts estimate that up to 80% of the active ingredients in oral supplements are destroyed during digestion. For anyone with a compromised or slowed digestive system (a common issue for those on GLP‑1 medications), that number can be even higher. You’re literally flushing your money down the toilet.
            </p>
            <p>
              <strong>The “Switch” Solution:</strong> The patch uses transdermal delivery, a technology trusted by hospitals for decades. By delivering its powerful ingredients directly through the skin into the bloodstream, it completely bypasses the destructive forces of the stomach. This ensures high absorption so your body gets the full, uninterrupted benefit of every single nutrient.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serifDisplay text-2xl mb-3">3. It Uses “Nature’s Ozempic” to Reduce Hunger by Nearly Half</h2>
            <p>
              Imagine feeling naturally less hungry without the side effects, cost, or hassle of prescriptions.
            </p>
            <p>
              <strong>The Problem:</strong> Uncontrolled hunger sabotages even the best‑laid diet plans. When your GLP‑1 is low, you’re fighting a losing battle against your own biology.
            </p>
            <p>
              <strong>The “Switch” Solution:</strong> The patch is infused with Berberine, a potent plant extract often nicknamed “Nature’s Ozempic.” In a peer‑reviewed clinical study, participants taking Berberine naturally reduced their food intake by 47.5%. The patch delivers this ingredient steadily, helping you feel satisfied with smaller portions without the “white‑knuckle” struggle.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serifDisplay text-2xl mb-3">4. It Stops Sugar Cravings and Prevents the “3 p.m. Crash”</h2>
            <p>
              That afternoon energy slump that sends you running for the snack cabinet isn’t just a bad habit—it’s a sign of unstable blood sugar.
            </p>
            <p>
              <strong>The Problem:</strong> When your GLP‑1 levels are low, your blood sugar is on a rollercoaster, leading to energy spikes and crashes that trigger intense cravings for sugar and simple carbs.
            </p>
            <p>
              <strong>The “Switch” Solution:</strong> The patch contains a patented, concentrated form of Saffron Extract. In a double‑blind, placebo‑controlled study, this ingredient reduced sugar cravings by 65% and decreased snacking events by 55%. By keeping your energy and hormone levels stable for 8 hours, it helps you glide through your day without the desperate need for a sugary pick‑me‑up.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-serifDisplay text-2xl mb-3">5. It’s a Simple, Once‑a‑Day Ritual That Works While You Live Your Life</h2>
            <p>
              The best health solutions are the ones you don’t have to think about.
            </p>
            <p>
              <strong>The Problem:</strong> Complicated routines with multiple pills, powders, and restrictive meal plans are difficult to maintain and often lead to burnout and failure.
            </p>
            <p>
              <strong>The “Switch” Solution:</strong> Apply one small, discreet patch in the morning and take it off 8 hours later. No pills to swallow, no nausea, no refrigeration, and no rigid schedules. It works quietly in the background, easing cravings and supporting metabolism while you focus on your day.
            </p>
          </section>

          <blockquote className="mt-10 border-l-4 pl-4 italic text-muted-foreground">
            “After menopause, nothing worked anymore. I couldn’t afford Wegovy. This patch helped me lose 28 pounds in 4 months. My doctor was shocked.” — <span className="text-foreground">Margaret T., 56</span>
          </blockquote>

          <section id="availability" className="mt-12 border rounded-lg p-6 bg-card animate-scale-in text-center">
            <h3 className="font-serifDisplay text-2xl">How to Try the “8‑Hour Appetite Switch” Today</h3>
            <p className="mt-3 text-muted-foreground">
              The Patched GLP‑1 Patch is not available in stores and inventory is limited due to patented, high‑grade ingredients.
            </p>
            <p className="mt-2">
              For a limited time, new customers can try it risk‑free with a 30‑day, 100% money‑back guarantee.
            </p>
            <div className="mt-4">
              <a href="#" aria-label="Check availability" rel="nofollow">
                <Button size="lg" className="animate-scale-in">Click Here to Check Availability</Button>
              </a>
            </div>
          </section>
        </article>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Journal — Health & Wellness
      </footer>
    </>
  );
}
