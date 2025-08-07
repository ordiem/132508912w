import { useEffect, useMemo } from "react";
import heroImage from "@/assets/hero-wsj.jpg";

const slides = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: heroImage,
  alt: `Copenhagen Fashion Week street style look ${i + 1}`,
  credit: "Photographed by Acielle / StyleDuMonde",
}));

export default function Article() {
  const title = "Street Style: Copenhagen Fashion Week S/S 2026";
  const description =
    "The best street style looks from Copenhagen Fashion Week S/S 2026 — ruffles, layering and prints captured on the streets.";
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

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image: slides.map((s) => new URL(s.src, window.location.origin).toString()),
      articleSection: "Street Style",
      author: {
        "@type": "Person",
        name: "Claudia Groch",
      },
      publisher: {
        "@type": "Organization",
        name: "Journal",
      },
      datePublished: "2025-08-07",
      dateModified: "2025-08-07",
      mainEntityOfPage: canonical,
    }),
    [title, description, canonical]
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a href="/" className="story-link">Home</a>
            <span className="mx-2">/</span>
            <span>Style</span>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-10">
        {/* Intro block - centered like Vogue */}
        <article className="mx-auto max-w-3xl text-center animate-fade-in">
          <p className="uppercase tracking-[0.12em] text-xs text-muted-foreground">Copenhagen Fashion Week</p>
          <h1 className="font-serifDisplay text-4xl sm:text-5xl md:text-6xl leading-tight mt-3">
            {title}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="h-12 w-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold">
              CG
            </div>
            <div>
              <span className="text-foreground">Claudia Groch</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-08-07">Aug 7, 2025</time>
            </div>
          </div>
        </article>

        {/* Lead image */}
        <figure className="mt-10 overflow-hidden rounded-lg border">
          <img
            src={heroImage}
            alt="Two attendees in sculptural white ruffle tops outside a neoclassical building in Copenhagen"
            loading="eager"
            className="w-full h-auto"
          />
        </figure>

        {/* Gallery */}
        <section aria-label="Gallery" className="mt-12 max-w-3xl mx-auto">
          <ol className="space-y-12">
            {slides.map((s) => (
              <li key={s.id}>
                <figure className="overflow-hidden rounded-lg border">
                  <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-auto" />
                </figure>
                <figcaption className="px-2 text-center mt-3 text-sm text-muted-foreground">
                  <span className="block">{s.credit}</span>
                  <span className="block mt-1">{s.id}/{slides.length}</span>
                </figcaption>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Journal — Style & Culture
      </footer>
    </>
  );
}
