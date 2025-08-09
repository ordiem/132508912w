import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/hero-wsj.jpg";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-serifDisplay text-foreground">
            [LOGO]
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Fitness
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Wellness
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Nutrition
            </a>
          </nav>
        </div>
      </header>

      {/* Article Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12">
        <article className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Category & Metadata */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                  Fitness
                </Badge>
                <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                  Health Tips
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Updated Dec 15, 2024
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-serifDisplay font-bold leading-tight text-foreground">
                How to Stay Active During Winter Months
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cold weather doesn't have to derail your fitness routine. Here's how to maintain your momentum and stay healthy all season long.
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-3 py-4">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">JD</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Written by Jane Doe</p>
                <p className="text-xs text-muted-foreground">Certified Personal Trainer</p>
              </div>
            </div>

            <Separator />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-foreground leading-relaxed">
                As temperatures drop and daylight hours shrink, many people find their motivation to exercise waning. The cozy appeal of staying indoors can make it challenging to maintain the active lifestyle you've worked hard to build.
              </p>

              <p className="text-foreground leading-relaxed">
                But winter doesn't have to mean hibernation mode for your fitness routine. With the right strategies and mindset, you can not only maintain your current fitness level but actually improve it during the colder months.
              </p>

              <h2 className="text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
                Embrace Indoor Activities
              </h2>

              <p className="text-foreground leading-relaxed">
                Indoor workouts offer consistency and comfort that outdoor activities can't match during winter. Consider investing in basic equipment like resistance bands, dumbbells, or a yoga mat to create an effective home gym setup.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Try online workout classes or fitness apps</li>
                <li>Explore bodyweight exercises that require no equipment</li>
                <li>Consider joining a local gym or fitness studio</li>
                <li>Practice yoga or pilates for flexibility and strength</li>
              </ul>

              <h2 className="text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
                Make the Most of Natural Light
              </h2>

              <p className="text-foreground leading-relaxed">
                Limited daylight can affect both your mood and energy levels. Schedule your workouts during peak daylight hours when possible, or consider investing in a light therapy lamp for your exercise space.
              </p>

              <h2 className="text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
                Layer Up for Outdoor Adventures
              </h2>

              <p className="text-foreground leading-relaxed">
                Don't let cold weather keep you completely indoors. With proper layering and gear, activities like hiking, running, or cycling can be enjoyable even in winter conditions.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground my-6">
                "The key to winter fitness is preparation and consistency. Small, regular efforts compound into significant results over time."
              </blockquote>

              <h2 className="text-2xl font-serifDisplay font-semibold text-foreground mt-8 mb-4">
                Stay Motivated with Goals
              </h2>

              <p className="text-foreground leading-relaxed">
                Set specific, achievable goals for the winter months. Whether it's maintaining your current fitness level, learning a new skill, or preparing for spring activities, having clear objectives helps maintain motivation during darker months.
              </p>

              <p className="text-foreground leading-relaxed">
                Remember, consistency beats intensity. It's better to do shorter workouts regularly than to attempt marathon sessions that you can't sustain. Listen to your body, adjust your routine as needed, and celebrate small victories along the way.
              </p>
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">Related Topics:</p>
              <div className="flex flex-wrap gap-2">
                {["Winter Fitness", "Indoor Workouts", "Motivation", "Health Tips", "Seasonal Wellness"].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="lg:sticky lg:top-8 animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={heroImage} 
                alt="Person exercising outdoors in winter weather"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/20 px-2 py-1 rounded">
                Photo: Getty Images/iStock
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;