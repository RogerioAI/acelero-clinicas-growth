export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  date: string;
  readTime?: string;
}
