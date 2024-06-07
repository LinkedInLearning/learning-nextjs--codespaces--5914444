// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function PostSkeleton() {
  return (
    <div className={`${shimmer} border border-gray-200 p-6 my-4`}>
      <div className="h-2 p-1  w-25 rounded-md bg-gray-100" />
      <div className="h-2 p-1 mt-2 w-10 rounded-md bg-gray-100" />
      <div className="mt-2 h-6 w-16 rounded-md bg-gray-100 text-sm font-medium" style={{ width: "100%" }} />
    </div>
  );
}

export function PostsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <PostSkeleton key={index} />
      ))}
    </>
  );
}