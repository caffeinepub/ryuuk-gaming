import { type Game } from '../backend';
import { Gamepad2 } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const imageUrl = game.coverImage.getDirectURL();

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
            {game.title}
          </h3>
        </div>
        <p className="text-muted-foreground line-clamp-3">
          {game.description}
        </p>
      </div>
    </div>
  );
}
