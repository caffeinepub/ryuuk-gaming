import { useGames } from '../hooks/useGames';
import GameCard from '../components/GameCard';
import { Loader2, Gamepad2 } from 'lucide-react';

export default function Games() {
  const { data: games, isLoading, error } = useGames();

  return (
    <div className="w-full py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Gamepad2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            FEATURED GAMES
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest and greatest console games we're playing and reviewing
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-destructive text-lg">Failed to load games. Please try again later.</p>
          </div>
        )}

        {/* Games Grid */}
        {!isLoading && !error && games && games.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && games && games.length === 0 && (
          <div className="text-center py-20">
            <Gamepad2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No games available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
