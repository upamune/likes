export interface RSSItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  'content:encoded': string;
}

export interface RSSFeed {
  channel: {
    title: string;
    description: string;
    item: RSSItem[];
  };
}