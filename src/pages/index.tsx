import Head from 'next/head';
import HomeLayout from '@/layout/home';
import { callAPI } from '@/services/api';
import { useEffect, useState } from 'react';

const mockPosts = [
  {
    slug: 'first-post',
    sys: { id: '21', publishedAt: '19 August' },
    title: 'First Post',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1h2ME1ky2kWcuUXrN6ih6vkjBRHfXXSmog&usqp=CAU',
    content: '',
  },
  {
    slug: 'second-post',
    sys: { id: '22', publishedAt: '19 August' },
    title: 'Second Post',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1h2ME1ky2kWcuUXrN6ih6vkjBRHfXXSmog&usqp=CAU',
    content: '',
  },
];

const queryPostsHome = `{
  postCollection(limit: 4, ) {
    total
    limit
    items {
      slug
      title
      content
      sys {id, publishedAt }
    }
  }
}
`;

interface IPostHome {
  slug: string;
  title: string;
  content: string;
  sys: {
    id: string;
    publishedAt: string;
  };
}

export default function Home() {
  const [data, setData] = useState<{
    total: number;
    limit: number;
    items: IPostHome[];
  }>({ total: 0, limit: 0, items: [] });

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      const postsResponse = await callAPI(queryPostsHome);
      setData(postsResponse.data.postCollection);
      console.log({ postsResponse });
      setPosts(postsResponse.data.postCollection.items);
      setTotal(postsResponse.data.postCollection.total);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Breno Nunes - Front End Developer</title>
        <meta name="description" content="Breno Nunes - Front End Developer" />
        <link rel="icon" href="/me.png" />
      </Head>
      <HomeLayout posts={data.items} hasMorePosts={data.total > data.limit} />
    </div>
  );
}
