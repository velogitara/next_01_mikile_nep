'use client';

import { getPostBySearch } from '@/Services/getPosts';
import { FormEventHandler, useState } from 'react';
type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostBySearch(search);

    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
