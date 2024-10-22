import { createBlog, deleteBlog, getBlogs, updateBlog } from '@/services/blog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ['Blogs'],
    queryFn: async () => await getBlogs(),
  });
};
export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Create_blog'],
    mutationFn: async (blogData) => await createBlog(blogData),
    onSuccess: () => {
      toast.success('Blog created successfully.');
      queryClient.invalidateQueries({ queryKey: ['Blogs'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Update_blog'],
    mutationFn: async ({ blogData, blogId }) =>
      await updateBlog(blogData, blogId),
    onSuccess: () => {
      toast.success('Blog updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['Blogs'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Delete_blog'],
    mutationFn: async (id) => await deleteBlog(id),
    onSuccess: () => {
      toast.success('Blog deleted successfully.');
      queryClient.invalidateQueries({ queryKey: ['Blogs'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
