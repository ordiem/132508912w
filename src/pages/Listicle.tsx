import { useState } from "react";

const Listicle = () => {
  const [currentItem, setCurrentItem] = useState(1);

  const reasons = [
    {
      title: "Your energy levels will soar like stardust ✨",
      content: "Carrying extra weight is like wearing a heavy cosmic cloak that drains your mystical energy. When you shed those pounds, you'll feel lighter than air and ready to dance among the stars.",
      image: "🌟"
    },
    {
      title: "Your confidence will shine brighter than the moon 🌙",
      content: "There's something magical that happens when you feel comfortable in your own skin. Your inner glow becomes visible to everyone around you, like moonlight breaking through clouds.",
      image: "🌙"
    },
    {
      title: "You'll sleep like you're floating on clouds ☁️",
      content: "Extra weight can disrupt your sleep patterns and cause snoring. Losing weight often leads to deeper, more restorative sleep that feels like floating in a peaceful dreamscape.",
      image: "☁️"
    },
    {
      title: "Your joints will thank you with every step 🦋",
      content: "Every pound lost is like lifting a small burden from your knees, hips, and ankles. You'll move with the grace of a butterfly instead of feeling weighed down.",
      image: "🦋"
    },
    {
      title: "Your heart will beat with renewed vitality 💫",
      content: "A healthier weight reduces strain on your cardiovascular system, allowing your heart to pump blood more efficiently. It's like giving your life force a magical boost.",
      image: "💫"
    },
    {
      title: "You'll discover clothes that make you feel enchanted 👗",
      content: "Shopping becomes an adventure of self-discovery when you have more clothing options. You'll find outfits that make you feel like the magical being you truly are.",
      image: "👗"
    },
    {
      title: "Your mood will lift like morning mist ☀️",
      content: "Physical activity and healthy eating release endorphins - nature's own happiness spell. You'll find yourself smiling more and feeling lighter in spirit.",
      image: "☀️"
    },
    {
      title: "You'll breathe easier, like fresh mountain air 🏔️",
      content: "Excess weight around your midsection can make breathing more difficult. Losing weight opens up your airways and makes every breath feel like pure, crisp mountain air.",
      image: "🏔️"
    },
    {
      title: "Your skin will glow with inner radiance ✨",
      content: "Proper nutrition and exercise improve circulation, giving your skin a natural, healthy glow that no makeup can replicate. It's like having your own inner light.",
      image: "✨"
    },
    {
      title: "You'll inspire others like a guiding star 🌟",
      content: "Your transformation journey becomes a beacon of hope for others. You'll discover the magic of inspiring loved ones to embark on their own wellness adventures.",
      image: "🌟"
    },
    {
      title: "You'll add years to your mystical journey 🔮",
      content: "Studies consistently show that maintaining a healthy weight can add years to your life. Think of all the additional time you'll have to create magic and memories.",
      image: "🔮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Mystical Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-4 leading-tight">
            11 Magical Reasons Why Your Soul Needs to Lose Weight
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the mystical transformation that awaits when you embark on your weight loss journey ✨
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>By The Cosmic Wellness Team</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>✨ Mystical</span>
          </div>
        </header>

        {/* Progress indicator */}
        <div className="sticky top-4 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{currentItem} / {reasons.length}</span>
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentItem / reasons.length) * 100}%` }}
            />
          </div>
        </div>

        {/* List items */}
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <article 
              key={index}
              className="group scroll-mt-24"
              id={`reason-${index + 1}`}
              onAnimationEnd={() => {
                if (index + 1 > currentItem) {
                  setCurrentItem(index + 1);
                }
              }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {reason.content}
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="text-6xl filter drop-shadow-lg hover:scale-110 transition-transform duration-300">
                        {reason.image}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Ready to Begin Your Mystical Transformation? 🌟
            </h3>
            <p className="text-muted-foreground mb-6">
              Every journey begins with a single step. Your magical wellness adventure awaits.
            </p>
            <button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              Start Your Journey ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listicle;