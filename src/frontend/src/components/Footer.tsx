import { SiYoutube, SiTwitch, SiX, SiDiscord } from 'react-icons/si';
import { Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ryuuk-gaming'
  );

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/generated/logo.dim_400x400.png" 
                alt="Ryuuk Gaming Logo" 
                className="h-12 w-12"
              />
              <span className="text-lg font-black tracking-tight">RYUUK GAMING</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for console gaming content, reviews, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/games" className="hover:text-foreground transition-colors">Games</a></li>
              <li><a href="/videos" className="hover:text-foreground transition-colors">Videos</a></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wide">Connect With Us</h3>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Ryuuk Gaming. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
