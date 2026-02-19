import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type Video } from '../backend';

export function useVideos() {
  const { actor, isFetching } = useActor();

  return useQuery<Video[]>({
    queryKey: ['videos'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllVideos();
    },
    enabled: !!actor && !isFetching,
  });
}
