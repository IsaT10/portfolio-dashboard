import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from '@/services/projects';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetProjects = () => {
  return useQuery({
    queryKey: ['Projects'],
    queryFn: async () => await getProjects(),
  });
};
export const useAddProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Add_project'],
    mutationFn: async (projectData) => await addProject(projectData),
    onSuccess: () => {
      toast.success('Project added successfully.');
      queryClient.invalidateQueries({ queryKey: ['Projects'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Update_project'],
    mutationFn: async ({ projectData, projectId }) =>
      await updateProject(projectData, projectId),
    onSuccess: () => {
      toast.success('Project updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['Projects'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Delete_project'],
    mutationFn: async (id) => await deleteProject(id),
    onSuccess: () => {
      toast.success('Project deleted successfully.');
      queryClient.invalidateQueries({ queryKey: ['Projects'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
