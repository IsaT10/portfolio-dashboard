import { axiosInstance } from '@/lib/axiosInstance';

export const getSkill = async () => {
  try {
    const res = await axiosInstance.get('/skills/671702fd4e1cd2f809464614');

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const addSkills = async (data) => {
  try {
    const res = await axiosInstance.post('/skills/add-skill', data);

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
export const updateSkill = async (data) => {
  try {
    const res = await axiosInstance.patch(
      `/skills/update-skill/671702fd4e1cd2f809464614`,
      data
    );

    return res?.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
