import { SiYoutube, SiTwitch, SiX, SiDiscord } from 'react-icons/si';
import { MessageSquare, Users, Bell } from 'lucide-react';

export default function Contact() {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: SiYoutube,
      url: 'https://youtube.com',
      description: 'Subscribe for gameplay videos, reviews, and walkthroughs',
      color: 'hover:border-[#FF0000] hover:bg-[#FF0000]/5',
      iconColor: 'text-[#FF0000]',
    },
    {
      name: 'Twitch',
      icon: SiTwitch,
      url: 'https://twitch.tv',
      description: 'Watch us live and join the chat during streams',
      color: 'hover:border-[#9146FF] hover:bg-[#9146FF]/5',
      iconColor: 'text-[#9146FF]',
    },
    {
      name: 'X (Twitter)',
      icon: SiX,
      url: 'https://x.com',
      description: 'Follow for updates, news, and quick gaming takes',
      color: 'hover:border-foreground hover:bg-foreground/5',
      iconColor: 'text-foreground',
    },
    {
      name: 'Discord',
      icon: SiDiscord,
      url: 'https://discord.com',
      description: 'Join our community server and connect with fellow gamers',
      color: 'hover:border-[#5865F2] hover:bg-[#5865F2]/5',
      iconColor: 'text-[#5865F2]',
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            CONNECT WITH US
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our growing community across multiple platforms and never miss out on the action
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card border-2 border-border rounded-xl p-8 transition-all hover:shadow-xl ${platform.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`h-14 w-14 rounded-lg bg-background flex items-center justify-center flex-shrink-0 ${platform.iconColor}`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Join Our Community</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're building an amazing community of console gaming enthusiasts. Whether you're 
              a casual player or a hardcore gamer, there's a place for you here. Connect with 
              us on your favorite platform and become part of the Ryuuk Gaming family!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Games Covered</div>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Stay Updated</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't miss out on new content! Subscribe to our channels and turn on notifications 
              to be the first to know when we drop new videos, go live, or share exciting gaming news.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
