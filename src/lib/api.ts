const RSS_FEED_URL = 'https://api.w2r.serizawa.dev/feed/0895a181-850f-49fa-91ef-d0d01f25a8ee';

export async function fetchRSSFeed() {
  try {
    const response = await fetch(RSS_FEED_URL);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
}