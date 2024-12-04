import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useModal } from "..";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { isOpen, openModal, closeModal } = useModal();
  const { mutate: createTask, isPending: isLoadingCreateTask } = useMutation({
    mutationFn: async (taskForm: any) => {
      const { title, description, subTasks, column_id } = taskForm;

      // create task
      const task = await httpClient.post(`/columns/${column_id}/tasks`, {
        title,
        description,
      });

      // include subTask in created task
      if (subTasks) {
        subTasks.forEach(async (element: any) => {
          console.log({ element });
          await httpClient.post(`/tasks/${task.data.id}/sub_tasks`, element);
        });
      }
    },
    onSuccess: (data) => {
      console.log({ data });
      queryClient.invalidateQueries({ queryKey: ["task"] });
      closeModal();
    },
    onError: (data) => {
      console.log({ data });
    },
  });
  return {
    isOpen,
    openModal,
    closeModal,
    createTask,
    isLoadingCreateTask,
  };
}
