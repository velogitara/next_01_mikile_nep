'use client';
import PostSearch from '@/Components/PostSearch';
import { Posts } from '@/Components/Posts';
import { getAllPosts } from '@/Services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default function Blog() {
  // const posts =  await getData()
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
