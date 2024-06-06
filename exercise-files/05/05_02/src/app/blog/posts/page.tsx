import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB } from '@/app/lib/data';

export default async function Page() {
  const client = await connectToDB();
  return (
    <>
      {client && <h1>Connected to database</h1>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}