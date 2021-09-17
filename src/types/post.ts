interface ISysPost {
  id: string;
  publishedAt: string;
}

export interface IPost {
  slug: string;
  title: string;
  content: string;
  sys: ISysPost;
}
