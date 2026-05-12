import { BlogPost } from "@/types/blog";

const PT_MONTHS: Record<string, string> = {
  'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04',
  'Mai': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08',
  'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12',
};

export function ptDateToISO(dateStr: string): string {
  const parts = dateStr.trim().split(' ');
  if (parts.length !== 3) return '';
  const [day, month, year] = parts;
  const m = PT_MONTHS[month];
  if (!m) return '';
  return `${year}-${m}-${day.padStart(2, '0')}T00:00:00-03:00`;
}

export function getPostTimestamp(post: Pick<BlogPost, 'date' | 'updatedAt'>): number {
  const iso = post.updatedAt ?? ptDateToISO(post.date);
  const t = Date.parse(iso);
  return isNaN(t) ? 0 : t;
}

export function sortPostsByDateDesc<T extends Pick<BlogPost, 'date' | 'updatedAt'>>(posts: T[]): T[] {
  return [...posts].sort((a, b) => getPostTimestamp(b) - getPostTimestamp(a));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function estimateReadTime(content: string): string {
  const text = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`|\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = text.split(' ').filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export function countWords(content: string): number {
  return content
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_>`|\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}
