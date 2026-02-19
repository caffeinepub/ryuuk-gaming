import { Link } from '@tanstack/react-router';
import { Gamepad2, Video, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/hero-banner.dim_1920x600.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              LEVEL UP YOUR
              <span className="block text-primary mt-2">GAMING EXPERIENCE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Welcome to Ryuuk Gaming - your ultimate destination for console gaming content, 
              reviews, gameplay, and an amazing community of gamers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/games"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Explore Games
              </Link>
              <Link
                to="/videos"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
              >
                <Video className="mr-2 h-5 w-5" />
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              WHY RYUUK GAMING?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're passionate about console gaming and bringing you the best content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Gamepad2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Console Gaming Focus</h3>
              <p className="text-muted-foreground">
                Dedicated coverage of PlayStation, Xbox, and Nintendo games with in-depth reviews and gameplay.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Video className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Content</h3>
              <p className="text-muted-foreground">
                High-quality gameplay videos, walkthroughs, and tips to help you master your favorite games.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Amazing Community</h3>
              <p className="text-muted-foreground">
                Join thousands of gamers who share your passion for console gaming and connect with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url(/assets/generated/gaming-pattern.dim_1200x800.png)' }}
        />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              READY TO JOIN THE ACTION?
            </h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our channels and never miss out on the latest gaming content
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wide bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
