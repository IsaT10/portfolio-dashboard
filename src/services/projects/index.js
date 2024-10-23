import { axiosInstance } from '@/lib/axiosInstance';

export const getProjects = async () => {
  try {
    const res = await axiosInstance.get('/projects');

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const addProject = async (projectData) => {
  try {
    const res = await axiosInstance.post('/projects/add-project', projectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const updateProject = async (projectData, projectId) => {
  try {
    const res = await axiosInstance.patch(
      `/projects/update-project/${projectId}`,
      projectData,
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
export const deleteProject = async (projectId) => {
  try {
    const res = await axiosInstance.delete(`/projects/${projectId}`);

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
