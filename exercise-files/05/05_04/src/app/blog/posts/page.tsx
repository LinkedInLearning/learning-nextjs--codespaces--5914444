import Link from "next/link"
import { Button } from "@/app/ui/components/button"
// import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB, getPosts } from '@/app/lib/data';

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  return (
    <>
      {client && <p className='text-green-500 my-2'>Connected to database!</p>}
      <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link>
      <h1>Posts</h1>
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </>)
}