import BlogCard from '@/components/blog/blog-card';
import { WriteBlogModal } from '@/components/blog/write-blog-modal';
import { useGetBlogs } from '@/hooks/blog.hook';

export default function Blogs() {
  const { data, isLoading, error } = useGetBlogs();

  const blogs = data?.data?.result;
  return (
    <div>
      <WriteBlogModal />

      <h2 className='text-xl font-semibold my-10'>Blogs</h2>

      <div className='grid  md:grid-cols-2 xl:grid-cols-3  gap-y-20  gap-x-14'>
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
