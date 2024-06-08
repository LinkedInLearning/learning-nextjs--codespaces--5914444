import { notFound } from 'next/navigation';
// import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB, getPosts } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === ""); // empty string will never match any post (to test 404 errors)

  if (!post) {
    notFound();
  }
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>)
}