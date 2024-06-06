import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB } from '@/app/lib/data';

export default async function Page() {
  const client = await connectToDB();
  return (
    <>
      {client && <p className='text-green-500 my-2'>Connected to database!</p>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}