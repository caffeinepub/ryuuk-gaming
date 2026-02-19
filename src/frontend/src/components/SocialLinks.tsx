import { SiYoutube, SiTwitch, SiX, SiDiscord } from 'react-icons/si';

export default function SocialLinks() {
  const socialLinks = [
    { icon: SiYoutube, label: 'YouTube', url: 'https://youtube.com', color: 'hover:text-[#FF0000]' },
    { icon: SiTwitch, label: 'Twitch', url: 'https://twitch.tv', color: 'hover:text-[#9146FF]' },
    { icon: SiX, label: 'X (Twitter)', url: 'https://x.com', color: 'hover:text-foreground' },
    { icon: SiDiscord, label: 'Discord', url: 'https://discord.com', color: 'hover:text-[#5865F2]' },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`text-muted-foreground transition-colors ${social.color}`}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}
