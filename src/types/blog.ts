export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export interface NewBlogInput {
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  content: string;
}
