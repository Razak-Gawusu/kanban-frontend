import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useModal } from "..";
import { MaybeRef, h, toValue } from "vue";
import { separateResource } from "@/helpers";

export function useEditTask(task_id: MaybeRef<string | string[]>) {
  const queryClient = useQueryClient();
  const { isOpen, openModal, closeModal } = useModal();
  const { mutate: editTask, isPending: isLoadingEditTask } = useMutation({
    mutationFn: async (taskForm: any) => {
      const { title, description, subTasks, column_id } = taskForm;

      // edit task
      const task = await httpClient.put(`/tasks/${toValue(task_id)}`, {
        title,
        column_id,
        description,
      });

      // include subTask in edited task
      const [newSubTasks, existingSubTasks] = separateResource(subTasks);

      for (let item of newSubTasks) {
        async () => await httpClient.post(`/tasks/${task_id}sub_tasks`, item);
      }

      for (let item of existingSubTasks) {
        async () =>
          await httpClient.put(`sub_tasks/${item.id}`, {
            title: item.title,
            is_completed: item.is_completed,
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
    editTask,
    isLoadingEditTask,
  };
}
