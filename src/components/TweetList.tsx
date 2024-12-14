import { Card } from '@/components/ui/card';
import { TweetEmbed } from './TweetEmbed';
import { useTweets } from '@/hooks/useTweets';
import { Loader2 } from 'lucide-react';

export function TweetList() {
  const { tweets, isLoading, error } = useTweets();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Failed to load tweets. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-4">
      {tweets.map((tweet) => (
        <Card key={tweet.guid} className="p-0">
          <TweetEmbed tweetUrl={tweet.link} />
        </Card>
      ))}
    </div>
  );
}