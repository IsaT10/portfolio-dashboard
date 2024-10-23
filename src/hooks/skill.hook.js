import { addSkills, getSkill, updateSkill } from '@/services/skills';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetSkill = () => {
  return useQuery({
    queryKey: ['Skills'],
    queryFn: async () => await getSkill(),
  });
};
export const useAddSkills = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Add_skills'],
    mutationFn: async (data) => await addSkills(data),
    onSuccess: () => {
      toast.success('Skills added successfully.');
      queryClient.invalidateQueries({ queryKey: ['Skills'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUpdateSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Update_skill'],
    mutationFn: async ({ data }) => await updateSkill(data),
    onSuccess: () => {
      toast.success('Skills updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['Skills'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
