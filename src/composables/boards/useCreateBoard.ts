// import { IBoard } from "@/interfaces";
import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useModal } from "..";

export function useCreateBoard() {
  const queryClient = useQueryClient();
  const { openModal, isOpen, closeModal } = useModal();

  const { mutate: onCreateBoard, isPending: isLoadingCreateBoard } =
    useMutation({
      mutationFn: async (boardForm: any) => {
        const { title, columns } = boardForm;

        // create board
        const board = await httpClient.post("/boards", { title });

        // include columns in created board
        if (columns) {
          columns.forEach(async (element: any) => {
            await httpClient.post(`/boards/${board.data.id}/columns`, element);
          });
        }
      },
      onSuccess: (data) => {
        console.log({ data });
        queryClient.invalidateQueries({ queryKey: ["boards"] });
        closeModal();
      },
      onError: (data) => {
        console.log({ data });
      },
    });

  return {
    openModal,
    closeModal,
    isOpen,
    onCreateBoard,
    isLoadingCreateBoard,
  };
}
