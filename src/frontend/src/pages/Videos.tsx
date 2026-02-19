import { useVideos } from '../hooks/useVideos';
import VideoCard from '../components/VideoCard';
import { Loader2, Video } from 'lucide-react';

export default function Videos() {
  const { data: videos, isLoading, error } = useVideos();

  return (
    <div className="w-full py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Video className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            LATEST VIDEOS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our latest gameplay, reviews, and gaming content
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
            <p className="text-destructive text-lg">Failed to load videos. Please try again later.</p>
          </div>
        )}

        {/* Videos Grid */}
        {!isLoading && !error && videos && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.title} video={video} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && videos && videos.length === 0 && (
          <div className="text-center py-20">
            <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No videos available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
