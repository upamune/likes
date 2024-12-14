import { useEffect, useRef } from 'react';

interface TweetEmbedProps {
  tweetUrl: string;
}

export function TweetEmbed({ tweetUrl }: TweetEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Twitter widgets JSの読み込み
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // ツイートの埋め込み
    if (window.twttr && containerRef.current) {
      window.twttr.widgets.load(containerRef.current);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, [tweetUrl]);

  return (
    <div ref={containerRef} className="tweet-container">
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
}