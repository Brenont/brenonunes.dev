export const callAPI = async (query: string) => {
  console.log('called', query);
  const fetchUrl: string = process.env.NEXT_PUBLIC_GRAPH_API || '';

  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then(response =>
      response.json(),
    );
    return data;
  } catch (error) {
    throw new Error('Could not fetch data from api!');
  }
};

// NEXT_PUBLIC_GRAPH_API=https://cdn.contentful.com/spaces/4lwpzfdkodoz
// NEXT_PUBLIC_GRAPH_API=https://graphql.contentful.com/content/v1/spaces/4lwpzfdkodoz/environments/master
