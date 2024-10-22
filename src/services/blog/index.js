import { axiosInstance } from '@/lib/axiosInstance';

export const getBlogs = async () => {
  try {
    const res = await axiosInstance.get('/blogs');

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const createBlog = async (blogData) => {
  try {
    const res = await axiosInstance.post('/blogs/create-blog', blogData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const updateBlog = async (blogData, blogId) => {
  try {
    const res = await axiosInstance.patch(
      `/blogs/update-blog/${blogId}`,
      blogData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const deleteBlog = async (blogId) => {
  try {
    const res = await axiosInstance.delete(`/blogs/${blogId}`);

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
