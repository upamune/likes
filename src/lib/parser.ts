import { RSSItem } from './types';

export function parseRSSFeed(xmlString: string): RSSItem[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
  const items = xmlDoc.querySelectorAll('item');
  
  return Array.from(items).map((item) => ({
    title: item.querySelector('title')?.textContent || '',
    link: item.querySelector('link')?.textContent || '',
    guid: item.querySelector('guid')?.textContent || '',
    pubDate: item.querySelector('pubDate')?.textContent || '',
    'content:encoded': item.querySelector('content\\:encoded')?.textContent || '',
  }));
}