import { ITask } from "@/interfaces";
import { httpClient } from "@/plugins";
import { useQuery } from "@tanstack/vue-query";
import { MaybeRef, toValue } from "vue";

type Response = {
  message: string;
  data: ITask;
};
export function useGetTask(taskId: MaybeRef<string | string[]>) {
  const { data, isPending: isLoading } = useQuery<Response, Error, Response>({
    queryKey: ["task:single", taskId],
    queryFn: () => httpClient.get(`/tasks/${toValue(taskId)}`),
  });

  return {
    data,
    isLoading,
  };
}
