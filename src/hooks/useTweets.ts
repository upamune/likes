import { useState, useEffect } from 'react';
import { RSSItem } from '@/lib/types';
import { fetchRSSFeed } from '@/lib/api';
import { parseRSSFeed } from '@/lib/parser';

export function useTweets() {
  const [tweets, setTweets] = useState<RSSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadTweets() {
      try {
        const rssData = await fetchRSSFeed();
        const parsedTweets = parseRSSFeed(rssData);
        setTweets(parsedTweets);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch tweets'));
      } finally {
        setIsLoading(false);
      }
    }

    loadTweets();
  }, []);

  return { tweets, isLoading, error };
}