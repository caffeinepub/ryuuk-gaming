import { Gamepad2, Target, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            ABOUT RYUUK GAMING
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate community dedicated to bringing you the best console gaming content
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Our Story */}
          <section className="relative">
            <div 
              className="absolute inset-0 opacity-5 rounded-2xl"
              style={{ backgroundImage: 'url(/assets/generated/gaming-pattern.dim_1200x800.png)' }}
            />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">Our Story</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Ryuuk Gaming was born from a deep passion for console gaming. We believe that gaming 
                  is more than just entertainment—it's an art form, a community, and a way to connect 
                  with people around the world.
                </p>
                <p className="text-lg leading-relaxed">
                  Our channel focuses exclusively on console gaming, covering PlayStation, Xbox, and 
                  Nintendo platforms. We bring you honest reviews, exciting gameplay, helpful tips, 
                  and everything you need to enhance your gaming experience.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section>
            <h2 className="text-3xl font-black tracking-tight mb-8 text-center">
              WHAT DRIVES US
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create the best console gaming content and build a community where gamers 
                  can connect, learn, and share their passion.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We value our community above all else. Your feedback, suggestions, and 
                  engagement help us create better content every day.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Passion & Quality</h3>
                <p className="text-muted-foreground">
                  Every video, review, and piece of content is crafted with passion and 
                  dedication to quality. We only share what we truly love.
                </p>
              </div>
            </div>
          </section>

          {/* What We Cover */}
          <section className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-black tracking-tight mb-6">
              WHAT WE COVER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary">Game Reviews</h3>
                <p className="text-muted-foreground">
                  Honest, in-depth reviews of the latest console releases
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary">Gameplay Videos</h3>
                <p className="text-muted-foreground">
                  Full playthroughs and highlights from our gaming sessions
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary">Tips & Guides</h3>
                <p className="text-muted-foreground">
                  Helpful strategies and walkthroughs to master your games
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary">Gaming News</h3>
                <p className="text-muted-foreground">
                  Stay updated with the latest console gaming announcements
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
