import { Metadata } from 'next'

type Proprs = {
  params: {
    id: string
  }
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  })
  return res.json()
}

export async function generateMetadata({
  params: { id },
}: Proprs): Promise<Metadata> {
  return {
    title: id,
  }
}

export default async function Post({ params: { id } }: Proprs) {
  const post = await getData(id)
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
