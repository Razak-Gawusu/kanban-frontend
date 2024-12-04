import { httpClient } from "@/plugins";
import { useMutation } from "@tanstack/vue-query";

export function editSubTask() {
  const {} = useMutation({
    mutationFn: () => httpClient.put("/sub_tasks", {}),
  });
  return {};
}
