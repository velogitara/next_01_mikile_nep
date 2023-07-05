export const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Could not get data from server');

  return res.json();
};

export const getPostBySearch = async (search: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
  if (!res.ok) throw new Error('Unable to fetch posts.');

  return res.json();
};
