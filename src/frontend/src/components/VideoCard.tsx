import { type Video } from '../backend';
import { Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumbnailUrl = video.thumbnail.getDirectURL();

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
            <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {video.description}
        </p>
        <a
          href={video.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
        >
          Watch Now
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
