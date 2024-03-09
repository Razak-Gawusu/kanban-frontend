import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useModal } from ".";
import { useRouter } from "vue-router";

type Params = {
  resource: string;
  queryKeys?: string[];
};

export function useDeleteResource({ resource, queryKeys }: Params) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { openModal, isOpen, closeModal } = useModal();

  const { mutate: deleteResource, isPending: isLoadingDeleteResource } =
    useMutation({
      mutationFn: (id: string | string[]) =>
        httpClient.delete(`/${resource}/${id}`),
      onSuccess: () => {
        console.log("successfully deleted resource");
        if (queryKeys) {
          queryKeys.forEach((element) => {
            queryClient.invalidateQueries({ queryKey: [element] });
          });
        }
        if (resource === "boards") {
          closeModal();
          router.push({ name: "home" });
        }
      },
      onError: () => {
        console.log("error deleting resource");
      },
    });

  return {
    isOpen,
    openModal,
    closeModal,
    deleteResource,
    isLoadingDeleteResource,
  };
}
