'use client';
import { getAllPosts } from '@/Services/getPosts';
import { Metadata } from 'next';
import Link from 'next/link';
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
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
