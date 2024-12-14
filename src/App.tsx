import { Heart } from 'lucide-react';
import { TweetList } from '@/components/TweetList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <h1 className="text-xl font-semibold text-gray-900">Twitter うぱ Likes Feed</h1>
          <span className="text-sm text-gray-500">@upamune</span>
        </div>
      </header>
      <main>
        <TweetList />
      </main>
    </div>
  );
}

export default App;