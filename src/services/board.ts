import { IBoard } from "@/interfaces";
import { httpClient } from "@/plugins";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function boardServices() {
  const queryClient = useQueryClient();

  const { mutate: onCreateBoard, isPending: isLoadingCreateBoard } =
    useMutation({
      mutationFn: async (boardForm: IBoard) => {
        var { title, columns } = boardForm;
        console.log({ boardForm });

        const board = await httpClient.post("/boards", { title });

        columns.forEach(async (element) => {
          await httpClient.post(`/boards/${board.data.id}/columns`, element);
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["boards"] });
        console.log({ data });
      },
      onError: (data) => {
        console.log({ data });
      },
    });

  // Edit Board Fn
  const { mutate: onEditBoard, isPending: isLoadingEditBoard } = useMutation({
    mutationFn: async (boardForm: IBoard) => {
      var { title, columns } = boardForm;
      console.log({ boardForm });

      const board = await httpClient.put("/boards", { title });

      columns.forEach(async (element) => {
        await httpClient.post(`/boards/${board.data.id}/columns`, element);
      });
    },
    onSuccess: (data) => {
      console.log({ data });
    },
    onError: (data) => {
      console.log({ data });
    },
  });

  const { mutate: onDeleteBoard, isPending: isLoadingDeleteBoard } =
    useMutation({
      mutationFn: (id: string | string[]) => httpClient.delete(`/boards/${id}`),
      onSuccess: () => {
        console.log("successfully deleted board");
        queryClient.invalidateQueries({ queryKey: ["boards"] });
      },
      onError: () => {
        console.log("error deleting board");
      },
    });

  const { mutate: onDeleteColumn, isPending: isLoadingDeleteColumn } =
    useMutation({
      mutationFn: (id: string | string[]) =>
        httpClient.delete(`/columns/${id}`),
      onSuccess: () => {
        console.log("successfully deleted column");
        queryClient.invalidateQueries({ queryKey: ["board"] });
      },
      onError: () => {
        console.log("error deleting column");
      },
    });

  return {
    onEditBoard,
    onCreateBoard,
    onDeleteBoard,
    onDeleteColumn,
    isLoadingEditBoard,
    isLoadingDeleteBoard,
    isLoadingCreateBoard,
    isLoadingDeleteColumn,
  };
}
