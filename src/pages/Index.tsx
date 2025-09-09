import heroImage from "@/assets/hero-health.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Health and wellness hero image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serifDisplay font-bold mb-4">Welcome to the Ordiem Design Hub for Patched</h1>
            <p className="text-xl mb-6">Check your design suggestions here</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <article className="text-center animate-fade-in max-w-4xl mx-auto">
          <div className="space-y-4">
            <a href="/article" className="story-link text-primary block">Read the "Appetite Switch" Modern Clean Design</a>
            <a href="/blog" className="story-link text-primary block">Pharmacist Reveals $39.99 Alternative to Costly GLP-1 Medications</a>
            <a href="/falls-listicle" className="story-link text-primary block">5 Reasons Why You're Still Gaining Weight After 40</a>
            <a href="/patched" className="story-link text-primary block">Military Secret That Delivers 100% of Nutrients (New Advertorial Style)</a>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Index;
