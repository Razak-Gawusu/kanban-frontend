// import { IBoard } from "@/interfaces";
import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { useModal } from "..";
import { MaybeRef, toValue } from "vue";

export function useEditBoard(boardId: MaybeRef<string | string[]>) {
  const queryClient = useQueryClient();
  const { openModal, isOpen, closeModal } = useModal();

  const { mutate: editBoard, isPending: isLoadingEditBoard } = useMutation({
    mutationFn: async (boardForm: any) => {
      const { title, columns } = boardForm;

      // edit board
      const board = await httpClient.put(`/boards/${toValue(boardId)}`, {
        title,
      });

      console.log({ board });
      console.log({ columns });

      const { newColumns, existingColumns } = separateColumns(columns);

      //   include columns in created board
      if (newColumns) {
        newColumns.forEach(async (element: any) => {
          await httpClient.post(`/boards/${board.data.id}/columns`, element);
        });
      }

      if (existingColumns) {
        existingColumns.forEach(async (column) => {
          await httpClient.put(`/columns/${column.id}`, {
            title: column.title,
          });
        });
      }
    },
    onSuccess: (data) => {
      console.log({ data });
      queryClient.invalidateQueries({ queryKey: ["board"] });
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
    editBoard,
    isLoadingEditBoard,
  };
}

function separateColumns(columns: { id?: string; title: string }[]) {
  let existingColumns = [];
  let newColumns = [];
  for (let column of columns) {
    if (column.id) {
      existingColumns.push(column);
    } else {
      newColumns.push(column);
    }
  }

  return { newColumns, existingColumns };
}
