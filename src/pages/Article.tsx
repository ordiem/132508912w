import { useEffect, useMemo } from "react";
import heroImage from "@/assets/hero-wsj.jpg";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin } from "lucide-react";

const sections = [
  { id: "intro", title: "Executive Summary" },
  { id: "principle-1", title: "1. Price Is Information" },
  { id: "principle-2", title: "2. Time In Market Beats Timing" },
  { id: "principle-3", title: "3. Diversification Is Defense" },
  { id: "principle-4", title: "4. Liquidity Is a Moat" },
  { id: "principle-5", title: "5. Risk Is the Cost of Return" },
  { id: "principle-6", title: "6. Cash Flows Trump Narratives" },
  { id: "principle-7", title: "7. Incentives Shape Outcomes" },
  { id: "principle-8", title: "8. Cycles Repeat—Not The Same Way" },
  { id: "principle-9", title: "9. Costs Compound Too" },
  { id: "principle-10", title: "10. Discipline Outperforms Drama" },
];

export default function Article() {
  const title = "The 10 Principles of Modern Investing";
  const description = "A Wall Street Journal–style analysis on durable investing principles for 2025 and beyond.";
  const canonical = `${window.location.origin}/article`;

  useEffect(() => {
    document.title = `${title} — Journal`;

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
  }, [title, description, canonical]);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [new URL(heroImage, window.location.origin).toString()],
    author: {
      "@type": "Person",
      name: "Editorial Desk",
    },
    publisher: {
      "@type": "Organization",
      name: "Journal",
    },
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    mainEntityOfPage: canonical,
  }), [title, description, canonical]);

  const share = async () => {
    const shareData = { title, text: description, url: canonical };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(canonical)}`);
      }
    } catch {}
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a href="/" className="story-link">Home</a>
            <span className="mx-2">/</span>
            <span>Opinion</span>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <p className="uppercase tracking-wide text-accent text-sm font-medium">Markets & Investing</p>
            <h1 className="font-serifDisplay text-4xl sm:text-5xl leading-tight mt-2">{title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>By <span className="text-foreground">Editorial Desk</span></span>
              <span>•</span>
              <time dateTime="2025-01-01">Jan 1, 2025</time>
              <span>•</span>
              <span>7 min read</span>
              <Button variant="secondary" size="sm" className="ml-auto" onClick={share}>
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>

            <figure className="mt-6 overflow-hidden rounded-lg border">
              <img src={heroImage} alt="Editorial hero showing financial skyline with gold accent lines" loading="lazy" className="w-full h-auto" />
              <figcaption className="px-4 py-2 text-sm text-muted-foreground">An editorial illustration of market cycles and urban finance. Illustration.</figcaption>
            </figure>

            <section id="intro" className="mt-8 text-lg leading-relaxed drop-cap">
              Markets reward patience and discipline. In an age of instant takes and noisy feeds, a few enduring principles still anchor results. What follows is a practical field guide—meant to be clipped, saved, and revisited.
            </section>

            <blockquote className="mt-8 border-l-4 pl-4 italic text-muted-foreground">
              “In markets, temperament outperforms brilliance when the cycle turns.”
            </blockquote>

            {sections.slice(1).map((s) => (
              <section key={s.id} id={s.id} className="mt-10">
                <h2 className="font-serifDisplay text-2xl mb-3">{s.title}</h2>
                <p className="leading-relaxed text-[1.05rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dolor sed nisl accumsan vehicula. Sed in ultricies risus. Phasellus quis arcu vitae lectus congue pulvinar. Donec sed augue vitae magna egestas sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>
              </section>
            ))}

            <section className="mt-12">
              <h3 className="font-serifDisplay text-xl mb-2">Bottom Line</h3>
              <p className="text-[1.05rem] leading-relaxed">
                Keep costs low, automate good behavior, and let compounding do its quiet work. The rest is mostly commentary.
              </p>
            </section>
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-6 h-max">
            <div className="border rounded-lg p-5 bg-card animate-scale-in">
              <h2 className="font-serifDisplay text-xl mb-3">In this article</h2>
              <nav aria-label="Table of contents" className="space-y-2">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-sm text-muted-foreground hover:text-foreground hover-scale">
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 flex gap-2">
                <Button variant="secondary" className="flex-1" onClick={share}><Share2 className="h-4 w-4 mr-2"/>Share</Button>
                <Button variant="secondary" className="flex-1" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(canonical)}`)}>
                  <Twitter className="h-4 w-4 mr-2"/>Tweet
                </Button>
                <Button variant="secondary" className="flex-1" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`)}>
                  <Linkedin className="h-4 w-4 mr-2"/>Post
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Journal — Analysis & Opinion
      </footer>
    </>
  );
}
